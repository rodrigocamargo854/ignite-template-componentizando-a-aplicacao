import React from 'react'

import { Button } from './Button';

import '../styles/sidebar.scss';

//duplicando interface do outro componente
//Pesquisar se há como aproveitar esta interface sem precisar declarala novamente
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  //importando e tipando const do outro componente
  genres: GenreResponseProps[];
  selectedGenreId: number;
  //importando e tipando a função de outro componente
  handleClickButton: (id: number) => void;
}
//({const, const, função : componente proveniente})
export  function SideBar ({genres, selectedGenreId, handleClickButton}: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>

  )
}