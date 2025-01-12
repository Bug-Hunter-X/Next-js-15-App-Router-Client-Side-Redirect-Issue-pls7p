```javascript
// pages/index.js
export default function Home() {
  const user = useSession()?.user; // assuming you are using nextAuth

  if (!user) {
    return (
     <Navigate to='/login' replace={true} />
    );
  }

  return (
    <div>Home Page</div>
  );
}
```