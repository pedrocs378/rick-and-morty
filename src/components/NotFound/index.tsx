import { Container } from './styles'

export function NotFound() {
	return (
		<Container>
			<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M80 40C80 62.0911 62.0911 80 40 80C17.9111 80 0 62.0911 0 40C0 17.9111 17.9111 0 40 0C62.0911 0 80 17.9111 80 40Z" fill="#FFCC66" />
				<path d="M25.5556 44.4445C28.6238 44.4445 31.1111 40.9622 31.1111 36.6667C31.1111 32.3711 28.6238 28.8889 25.5556 28.8889C22.4873 28.8889 20 32.3711 20 36.6667C20 40.9622 22.4873 44.4445 25.5556 44.4445Z" fill="#474238" />
				<path d="M54.4445 44.4445C57.5127 44.4445 60 40.9622 60 36.6667C60 32.3711 57.5127 28.8889 54.4445 28.8889C51.3762 28.8889 48.8889 32.3711 48.8889 36.6667C48.8889 40.9622 51.3762 44.4445 54.4445 44.4445Z" fill="#474238" />
				<path d="M26.6667 62.2222C31.1112 51.111 55.5556 51.111 55.5556 55.5555C55.5556 57.7777 37.7779 53.3333 26.6667 62.2222Z" fill="#474238" />
			</svg>

			<strong>
				Nenhum personagem encontrado. <br />
				Tente uma nova busca
			</strong>
		</Container>
	)
}