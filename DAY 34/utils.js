export function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export async function fetchWithRetry(url, options = {}, retries = 3, backoff = 500) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);

            if (response.ok) {
                return response; // success, exit immediately
            }

            // If it's not ok, treat it like a failure and fall through to catch logic below
            throw new Error(`Request failed with status ${response.status}`);

        } catch (error) {
            const isLastAttempt = i === retries - 1;

            if (isLastAttempt) {
                console.log(`❌ All ${retries} attempts failed for ${url}`);
                throw error; // give up for real
            }

            console.log(`⚠️ Attempt ${i + 1} failed. Retrying in ${backoff}ms...`);
            await new Promise(resolve => setTimeout(resolve, backoff));

            backoff *= 2; // exponential backoff: 500 → 1000 → 2000
        }
    }
}