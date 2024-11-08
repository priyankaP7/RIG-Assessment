import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
  InputLabel,
  FormControl,
} from '@mui/material';

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    dob: '',
    country_code: '',
    contact_number: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/submit-profile/', formData);
      setSubmitted(true);
      alert('Profile submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit profile');
    }
  };

  const handleViewProfile = () => {
    navigate('/display');
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1),' }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        User Profile Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          onChange={handleChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            onChange={handleChange}
            value={formData.gender}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          InputLabelProps={{ shrink: true }}
          inputProps={{ max: today }}
          fullWidth
          required
          margin="normal"
          onChange={handleChange}
        />
        <Select
          label="Country Code"
          name="country_code"
          fullWidth
          required
          displayEmpty
          margin="normal"
          onChange={handleChange}
          value={formData.country_code}
          renderValue={(selected) => selected || 'Select Country Code'}
        >
          <MenuItem value="+1">+1 (USA)</MenuItem>
          <MenuItem value="+91">+91 (India)</MenuItem>
          <MenuItem value="+44">+44 (United Kingdom)</MenuItem>
          <MenuItem value="+61">+61 (Australia)</MenuItem>
          <MenuItem value="+81">+81 (Japan)</MenuItem>
          <MenuItem value="+49">+49 (Germany)</MenuItem>
          <MenuItem value="+33">+33 (France)</MenuItem>
          <MenuItem value="+86">+86 (China)</MenuItem>
          <MenuItem value="+82">+82 (South Korea)</MenuItem>
          <MenuItem value="+39">+39 (Italy)</MenuItem>
          <MenuItem value="+55">+55 (Brazil)</MenuItem>
          <MenuItem value="+34">+34 (Spain)</MenuItem>
          <MenuItem value="+7">+7 (Russia)</MenuItem>
          <MenuItem value="+52">+52 (Mexico)</MenuItem>
          <MenuItem value="+31">+31 (Netherlands)</MenuItem>
          <MenuItem value="+64">+64 (New Zealand)</MenuItem>
          <MenuItem value="+41">+41 (Switzerland)</MenuItem>
          <MenuItem value="+46">+46 (Sweden)</MenuItem>
          <MenuItem value="+20">+20 (Egypt)</MenuItem>
          <MenuItem value="+27">+27 (South Africa)</MenuItem>
          <MenuItem value="+971">+971 (United Arab Emirates)</MenuItem>
          <MenuItem value="+60">+60 (Malaysia)</MenuItem>
          <MenuItem value="+65">+65 (Singapore)</MenuItem>
          <MenuItem value="+92">+92 (Pakistan)</MenuItem>
          <MenuItem value="+63">+63 (Philippines)</MenuItem>
        </Select>
        
        <TextField
          label="Contact Number"
          name="contact_number"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />

          <TextField
          label="Address"
          name="address"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, py: 1.5 }}
        >
          Submit
        </Button>
      </form>
      {submitted && (
        <Button
          onClick={handleViewProfile}
          fullWidth
          variant="outlined"
          color="primary"
          sx={{ mt: 2, py: 1.5 }}
        >
          View Profile
        </Button>
      )}
    </Container>
  );
}

export default FormPage;