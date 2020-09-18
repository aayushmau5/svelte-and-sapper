<script>
	// import Modal from './Modal.svelte';
	import Modalslot from './Modalslot.svelte';
	import AddPersonForm from './AddPersonForm.svelte';

	// let count = 0;
	// function handleClick() {
	// 	count += 1;
	// }

	let peoples = [
		{ name: "Jim", age: 28, id: 1 },
		{ name: "John", age: 25, id: 2 },
		{ name: "James", age: 38, id: 3 },
	];

	let showModal = false;
	const toggleModal = () => {
		showModal = !showModal;
	}
	export let name;

	const addPerson = (e) => {
		const person = e.detail;
		peoples = [...peoples, person];
		// here we are not doing peoples.push() because
		// svelte won't recognize the change and update 
		// the contents because svelte relies on 
		// assignment to realise something need to be
		// updated.
	}
</script>

<!-- <Modal message="Hey, I'm a prop value." isPromo={false} {showModal} on:click={toggleModal} /> -->

<!-- <Modalslot isPromo={false} {showModal} on:click={toggleModal}>
	<form>
		<input type="text" placeholder="Name">
		<input type="text" placeholder="Age">
		<button>Add Person</button>
	</form>
	<div slot="title">
		<h3>Add a new Person</h3>
	</div>
</Modalslot> -->

<Modalslot isPromo={false} {showModal} on:click={toggleModal}>
	<AddPersonForm on:addPerson={addPerson} />
</Modalslot>

<main>
	<button on:click|once={toggleModal}>Show Modal</button>
	<h1>Modal</h1>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<!-- <button on:click={handleClick}>
	Clicked {count} {count==='1' ? 'time' : 'times'}
</button> -->