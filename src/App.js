import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const [data, setData] = useState([])
	console.log(data , 'get')
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (response.ok) {
					return response.json()
				}
			})
			.then((data) => setData(data))
	}, [])

	// ___________Post_____________

	const postTracker = async (data) => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts',
			{
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(data[2]),
			},
		)
		const dataa = await response.json()
    console.log(dataa , 'post');

		
	}

	return (
		<div className='App'>
			<button onClick={postTracker}>Post</button>
		</div>
	)
}

export default App
