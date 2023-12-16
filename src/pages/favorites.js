import Head from 'next/head'
import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatImage from '@/components/CatImage';
import useAppState from '@/useHooks/useAppState';

export default function Favorites() {
  const appState = useAppState();

  function changeName() {
    const titles = ['Cringey', 'Funny', 'Fortnite'];
    const randomTitleIndex = Math.floor(Math.random() * titles.length);
    const newUserName = `The ${titles[randomTitleIndex]} Guy`;

    appState.updateAppState({ user: newUserName });
    alert(`Your name is now ${newUserName}!`);
  }

  function removeCatImage(selectedCat) {
    const updatedFavoriteCats = appState.favoriteCats.filter(cat => cat !== selectedCat);
    appState.updateAppState({ favoriteCats: updatedFavoriteCats });
  }
  return (
    <>
    <Head>
        <title>Favorites</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid columns='1' verticalAlign='center'>
        <Grid.Row>
        <Grid.Column mobile={12} tablet={10} computer={8}>
        <Header as='h1' textAlign='left'>{appState.user}'s Favorites</Header>
        </Grid.Column>
        </Grid.Row>

        
        <Grid.Column verticalAlign='left' mobile={12} tablet={10} computer={8}>
        <Button content='Change Name' color='purple' icon='sync' onClick={changeName} />
        </Grid.Column>
        
      </Grid>
      <Grid centered stackable >
        {appState.favoriteCats.map((cat) => (
            <CatImage key={cat.id} src={cat.url} catImage={cat} onClick={() => removeCatImage(cat)} page="favorites"/>
          ))}
        </Grid>
    </>
  );
}
