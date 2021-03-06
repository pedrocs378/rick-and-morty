import { Header } from "../../components/Header";
import { CharacterCard } from "../../components/CharacterCard";

import { useFavorites } from "../../hooks/useFavorites";

import * as S from './styles'

export function Favorites() {

	const { favorites } = useFavorites()

	return (
		<>
			<Header id="favorites-top" title="Favoritos" />

			<S.Container>
				<S.FavoriteList>
					{favorites.map(character => {
						return (
							<CharacterCard
								key={character.id}
								character={character}
								isFavorited={favorites.some(favoritedChar => favoritedChar.id === character.id)}
							/>
						)
					})}
				</S.FavoriteList>

				{favorites.length > 1 && (
					<S.BackToTop>
						<a href="#favorites-top">Voltar ao topo</a>
					</S.BackToTop>
				)}
			</S.Container>
		</>
	)
}