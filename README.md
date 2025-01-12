# Next.js 15 App Router Client-Side Redirect Issue

This repository demonstrates an unexpected behavior with client-side redirects in the Next.js 15 App Router using the `useRouter` hook inside a `useEffect` hook. The redirect works, but it causes a full page reload which is not ideal for the user experience.

## Bug

The issue lies in how the `useRouter`'s `push` method behaves within a `useEffect` hook that only runs on the client-side.  The redirect to `/login` triggers a full page reload instead of the expected client-side navigation.

## Solution

The solution involves using a conditional rendering approach that does not rely on client side `useEffect` hooks.