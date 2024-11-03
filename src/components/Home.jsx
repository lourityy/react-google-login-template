import { useGoogleLogin } from "@react-oauth/google"
// lourity
const Home = () => {
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log('Giriş başarılı:', res);
      localStorage.setItem('access_token', res.access_token);
    },
    onError: (res) => {
      console.log('Giriş hatalı:', res);
    }
  })
  return (
    <div>
      <button onClick={login}>Google ile Oturum Aç</button>
    </div>
  )
}

export default Home