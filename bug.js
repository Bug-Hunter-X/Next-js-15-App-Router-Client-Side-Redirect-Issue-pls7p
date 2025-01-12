```javascript
// pages/index.js
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // This will only run on the client-side
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        router.push('/login'); // Redirect to login page
      }
    }
  }, []);

  return (
    <div>Home Page</div>
  );
}
```