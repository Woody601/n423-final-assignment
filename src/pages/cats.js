import Head from 'next/head'
import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import CatImage from '@/components/CatImage';
import useAppState from '@/useHooks/useAppState';

export default function Cats() {
  const appState = useAppState();

  console.log(appState);

  function getCatImages() {
    fetch(`https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&format=json&has_breeds=true&order=RANDOM&limit=10`)
      .then((r) => r.json())
      .then((r) => {
        appState.updateAppState({ catImages: r });
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  function saveCatImage(selectedCat) {
    appState.updateAppState({ favoriteCats: appState.favoriteCats.concat(selectedCat) });
    console.log(selectedCat);
  }

  return (
    <>
    <Head>
        <title>Cats</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid columns='1' verticalAlign='center'>
        <Grid.Row>
        <Grid.Column mobile={12} tablet={10} computer={8}>
          <Header as='h1' textAlign='left'>Random Cats</Header>
        </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column mobile={12} tablet={10} computer={8} textAlign='left'>
          <p>Click the button below to load 10 cats to view! If you don't like any, click the button again to reload and view some more!</p>
          <p>When you find a cat that you like, you can click on it's picture to view the details of the cat, and add it to your favorites list. </p>
        </Grid.Column>
        </Grid.Row>
        
        
        
        <Grid.Column verticalAlign='left' mobile={12} tablet={10} computer={8}>
          <Button content='Reload Cats' icon='sync' color='blue' onClick={getCatImages} />
        </Grid.Column>
        
      </Grid>
      <Grid centered stackable >
          {appState.catImages.map((catImage) => (
            <CatImage key={catImage.id} src={catImage.url} catImage={catImage} onClick={() => saveCatImage(catImage)} />
          ))}
        </Grid>
    </>
  );
}
  