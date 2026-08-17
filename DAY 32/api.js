export async function fetchGitHubUser(username) {
 
    const response = await fetch(`https://api.github.com/users/${username}`);
 
    if (response.status === 403 || response.status === 429) {
        throw new Error("API Rate Limit exceeded. Please wait a moment.");
    } else if (response.status === 404) {
        throw new Error("Developer not found.");
    } else if (!response.ok) {
        throw new Error("Something went wrong.");
    }
 
    return response.json();
 
}
 
export async function fetchGitHubRepos(username) {
 
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    );
 
    if (!response.ok) {
        throw new Error("Could not fetch repositories.");
    }
 
    return response.json();
 
}
 
export async function submitInitiative(dataPayload) {
 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dataPayload)
    });
 
    if (response.status !== 201) {
        throw new Error(`Server rejected the payload. Expected 201, got Status: ${response.status}`);
    }
 
    return response.json();
 
}
 
export async function updateInitiative(id) {
 
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id,
                title: "Updated Proposal [UPDATED]",
                body: "Proposal updated successfully.",
                userId: 1
            })
        }
    );
 
    if (!response.ok) {
        throw new Error("Failed to update proposal.");
    }
 
    return response.json();
 
}
 
export async function deleteInitiative(id) {
 
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { method: "DELETE" }
    );
 
    if (!response.ok) {
        throw new Error("Failed to delete proposal.");
    }
 
    return response.json();
 
}
 
export async function fetchPosts(page, limit) {
 
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
 
    if (!response.ok) {
        throw new Error("Failed to fetch data.");
    }
 
    return response.json();
 
}
 