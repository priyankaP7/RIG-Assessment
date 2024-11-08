import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';

function DisplayPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-profile/');
        setProfile(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <Typography variant="h6" align="center">Loading...</Typography>;

  return (
    <Container
      maxWidth="md" 
      style={{
        marginTop: '2rem',
        padding: '1.5rem', 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px', 
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1),'
      }}
    >
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        User Profile
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body1"><strong>Name:</strong> {profile.name}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {profile.email}</Typography>
        <Typography variant="body1"><strong>Gender:</strong> {profile.gender || 'N/A'}</Typography>
        <Typography variant="body1"><strong>Date of Birth:</strong> {profile.dob}</Typography>
        <Typography variant="body1"><strong>Country Code:</strong> {profile.country_code}</Typography>
        <Typography variant="body1"><strong>Contact Number:</strong> {profile.contact_number || 'N/A'}</Typography>
        <Typography variant="body1"><strong>Address:</strong> {profile.address || 'N/A'}</Typography>
      </Box>
    </Container>
  );
}

export default DisplayPage;