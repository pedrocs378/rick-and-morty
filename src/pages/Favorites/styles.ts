import styled from "styled-components";

export const Container = styled.main`
	grid-area: content;
	flex: 1;

	padding: 0 1rem;
	max-width: var(--screen-content);
	min-height: calc(100vh - 16rem);
	margin: 2.5rem auto;

	@media (min-width: 500px) {
		min-height: calc(100vh - 12rem);
	}
`

export const BackToTop = styled.p`
	text-align: center;
	margin-top: 1.5rem;

	a {
		text-decoration: none;
		color: var(--heading);
	}

	@media (min-width: 500px) {
		display: none;
	}
`

export const FavoriteList = styled.div`
	margin-top: 3rem;

	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;

	@media (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 900px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (min-width: 1240px) {
		grid-template-columns: repeat(4, calc((1120px / 4) - 1.5rem));
	}
`