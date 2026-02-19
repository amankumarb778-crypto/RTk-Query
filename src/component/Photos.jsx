import React from 'react';
import { useGetPhotosQuery } from '../features/apiThunk/RTKUserApi.jsx';

const Photos = () => {
    const { data: photos, error, isLoading } = useGetPhotosQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

return (
  <ul>
    {photos.map(photo => (
      <li key={photo.id}>
        {photo.title}
        <p>url: {photo.url}</p>
      </li>
    ))}
  </ul>
);
};

export default Photos;