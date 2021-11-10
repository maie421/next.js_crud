import React from 'react'
import Head from 'next/head'
import TodoContainer from "./TodoContainer";

export default () => (
  <div>
    <Head>
      <title>Todo</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>
    <TodoContainer/>
  </div>
)
