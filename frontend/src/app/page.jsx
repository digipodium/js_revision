import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: 40 }}>Home Page</h1>

      <p className='text-center text-2xl'>Welcome to React</p>

      <input type="text" />
      <br />
      <hr />

      <button className='global-btn'>Global button</button>

      <div className='m-40 w-1/2'>
        <Card title="Card Title 1" description="Card description 1" />
        <Card title="Card Title 2" description="Card description 2" />
        <Card title="Card Title 3" description="Card description 3" />
        <Card title="Card Title 4" description="Card description 4" />
        <Card title="Card Title 5" description="Card description 5" />

        <div className='flex gap-5'>
          <MyButton id="some-btn" className="mt-5">click me</MyButton>
          <MyButton>submit</MyButton>
          <MyButton>click here</MyButton>
          <MyButton>loading</MyButton>
        </div>
      </div>

    </div>
  )
}

export default Home;