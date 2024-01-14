
"use client"
import bg2 from '@/public/bg2.jpg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const navigate = useRouter();


      const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        const userdata = {
            email,
            password
        }
        console.log(userdata);
        
  await axios.post("/api/user/login", userdata)   
  // await axios.get("/api/user/logout")
  .then(function (response) {
    if(response.status =="200"){
      toast.success("Login successful")
      return navigate.push("/dashboard")
    }
  })
  .catch(function (error) {
    console.log(error);
  });
 


    }
    return (
        <div className='relative font-inter'>
        <div className='w-[100vw] h-screen'>
        <Image className='w-full h-full' src={bg2} alt="" />
        </div>
        <div className='w-full h-screen absolute top-0  justify-items-center flex items-center justify-center gap-10'>
         
          <div className='bg-white/40 border-[2px] border-white/70 shadow-xl rounded-lg w-[350px] h-[400px] '>
            <h1 className='text-5xl font-bold text-center text-white py-4'>Login</h1>
            <div className='w-[80%] h-[1.5px] bg-white/70 mx-auto mt-1'></div>
  <div className='w-[80%] mt-5 mx-auto'>
    

              <Box onSubmit={handleSubmit}
                component='form'
                sx={{
                  '& > :not(style)': { m: 1, width: '260px' },
                }}
                noValidate
                autoComplete='off'
              >               
                 <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          name='email'
        />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                <button
                  type='submit'
                  className='w-[256px] h-10 bg-gradient-to-tr from-[#6133ea] to-[#d926f0] rounded-md text-white font-semibold'
                >
                  Login
                </button>
              </Box>
              <h1 className='text-md font-bold text-White px-2 py-3'>Don't have account? <Link href={"/signup"}>signup</Link></h1>
           
         </div>
          </div>

          
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    )
}

export default LoginPage