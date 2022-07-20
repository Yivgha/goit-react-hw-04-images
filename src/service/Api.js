import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
    per_page: 12,
    orientation: 'horizontal',
    image_type: 'photo',
    key: '27752204-f0153eb643d17be98ea2a5353',
};

export async function ServiceAPI(q, page) {
    try {
        const res = await axios.get(`?q=${q}&page=${page}`);
        return res.data;
  } catch (error) {
        console.error(error);
    }
};
  
ServiceAPI.propTypes = {
  q: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
    
