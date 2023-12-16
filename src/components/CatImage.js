import React from 'react';
import { Popup, Button, Image, Grid, Segment } from 'semantic-ui-react';
import Link from 'next/link';
export default function CatImage({ src, catImage, page, children, onClick }) {
  const isFavoritesPage = page === 'favorites';

  return (
    <>
    <Segment>
        <Popup wide
          trigger={<Image src={src} size='medium'/>}
          on='click'
          content={
          
          <div>
            <Button
                color={isFavoritesPage ? 'red' : 'green'} // Change color based on the page
                icon={isFavoritesPage ? 'remove' : 'heart'} // Change icon based on the page
                content={children || (isFavoritesPage ? 'Remove' : 'Save')}
                onClick={onClick}
              />
            {catImage && catImage.id && (
              <Link href={`/cats/${catImage.id}`}>
                <Button color='blue' icon='list' content={children || 'Details'} />
              </Link>
            )}
            
          </div>
        }
        />
    </Segment>
      
    </>
  );
}
