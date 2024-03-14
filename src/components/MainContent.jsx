import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FaSortAlphaDown } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { Button, Select, Input } from 'antd';
import { CiImport } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import wixl from '../assets/Wix Icon.png';
import shopy from '../assets/Shopify Bag.png'
import maily from '../assets/mailchimp.png'
import payp from '../assets/PayPal.png'
import disn from '../assets/Walt Disney Pictures.png'
import inter from '../assets/intercom.png'
import google from '../assets/google.png'
import evern from '../assets/Evernote icon.png'
import micro from '../assets/microsoft.png'
import invis from '../assets/InVision-icon-pink.png'
import memba from '../assets/members.png'
import '../App.css';

const { Option } = Select;
const { Search } = Input;

const MainContent = ({ searchQuery }) => {
  const initialData = [
    { id: 1, brand: 'Wix', logo: <img src={wixl} alt="Wix Logo" style={{ height: '50px', width: '50px' }} />, description: 'In a forgotten attic, dusty memories lay dormant, waiting for the gentle touch of nostalgia', members: 's', categories: 'Automataion', tags: ['#tech4life', '#adobelife', '#Selfie'], nextMeeting: '30Minutes' },
    { id: 2, brand: 'Shopify', logo: <img src={shopy} alt="Shopify Logo" style={{ height: '50px', width: '50px' }} />, description: 'Underneath the citys neon glow, whispered secrets dance between the shadows of strangers ', members: 'Member B', categories: 'Ecommerce, b2b', tags: ['#smartfinance'], nextMeeting: 'No Meetings' },
    { id: 3, brand: 'MailChimp', logo: <img src={maily} alt="MailChimp Logo" style={{ height: '50px', width: '50px' }} />, description: 'Within the pages of an old book, worlds unknown wait patiently for curious minds to explore ', members: 'Member A', categories: 'SAAS, Mobile', tags: ['#tech4life','#adobelife', '#Selfie'], nextMeeting: 'Tomorrow' },
    { id: 4, brand: 'PayPal', logo: <img src={payp} alt="PayPal Logo" style={{ height: '50px', width: '50px' }} />, description: 'Beneath the moons watchful gaze, dreams take flight on the wings of imagination, soaring', members: 'Member B', categories: 'Marketplace', tags: ['#smartfinance', 'Tag M'], nextMeeting: 'day-after' },
    { id: 5, brand: 'Disney', logo: <img src={disn} alt="Disney Logo" style={{ height: '50px', width: '50px' }} />, description: 'Amidst the chaos of the metropolis, a solitary flower blooms defiantly, a testament to nature', members: 'Member A', categories: 'B2B, B2C', tags: ['#tech4life', '#adobelife', '#Selfie', 'Tag Z'], nextMeeting: 'In 1hour' },
    { id: 6, brand: 'Intercom', logo: <img src={inter} alt="Intercom Logo" style={{ height: '50px', width: '50px' }} />, description: 'In the silence of an empty room, echoes of laughter linger, a reminder of moments shared and ', members: 'Member B', categories: 'Technology, SAAS', tags: ['#smartfinance'], nextMeeting: 'in 6hours' },
    { id: 7, brand: 'Google', logo: <img src={google} alt="Google Logo" style={{ height: '50px', width: '50px' }} />, description: 'Through the fog of uncertainty, a guiding light flickers, illuminating the path to newfound clarity', members: 'Member A', categories: 'Finance', tags: ['#tech4life', '#adobelife', '#Selfie'], nextMeeting: 'less than 5min' },
    { id: 8, brand: 'Evernote', logo: <img src={evern} alt="Evernote Logo" style={{ height: '50px', width: '50px' }} />, description: 'Beneath the canopy of stars, whispered wishes drift into the night sky, carried away on the', members: 'Member B', categories: 'Transportation', tags: ['#smartfinance'], nextMeeting: '10pm' },
    { id: 9, brand: 'Microsoft', logo: <img src={micro} alt="Microsoft Logo" style={{ height: '50px', width: '50px' }} />, description: 'Beneath the canopy of stars, whispered wishes drift into the night sky, carried away on the', members: 'Member A', categories: 'Publishing, B2V', tags: ['#tech4life', '#adobelife', '#Selfie'], nextMeeting: 'in 3 days' },
    { id: 10, brand: 'Invision', logo: <img src={invis} alt="Invision Logo" style={{ height: '50px', width: '50px' }} />, description: 'Amidst the symphony of life, a single note holds the power to stir the soul and awaken the ', members: 'Member B', categories: 'Web', tags: ['#smartfinance'], nextMeeting: 'In Meeting' }
  ];

  const [tableData, setTableData] = useState(initialData);
  const [filterTags, setFilterTags] = useState([]);
  const [selectedSortColumns, setSelectedSortColumns] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleEditCell = (id, field, value) => {
    const updatedData = tableData.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setTableData(updatedData);
  };

  const addRow = () => {
    const newRow = { id: tableData.length + 1, brand: '', logo: '', description: '', members: '', categories: '', tags: [], nextMeeting: '' };
    setTableData([...tableData, newRow]);
  };

  const filterByTag = (selectedTag) => {
    // Implement filtering logic based on selectedTag
    console.log(`Filtering by tag: ${selectedTag}`);
  };

  const handleSortCheckboxChange = (column, checked) => {
    if (checked) {
      setSelectedSortColumns([...selectedSortColumns, column]);
    } else {
      setSelectedSortColumns(selectedSortColumns.filter(col => col !== column));
    }
  };

  const handleSort = () => {
    // Implement sorting logic based on selectedSortColumns
    console.log('Sorting by columns:', selectedSortColumns);
  };

  const handleFilter = () => {
    // Implement filtering logic
    console.log('Filtering');
  };

  const YourComponent = ({ filteredData, tableData, columns }) => {
    const isMobile = window.innerWidth < 500;
  }

  const handleSearch = (value) => {
    const filtered = initialData.filter(row => 
      row.brand.toLowerCase().includes(value.toLowerCase()) ||
      row.description.toLowerCase().includes(value.toLowerCase()) ||
      row.members.toLowerCase().includes(value.toLowerCase()) ||
      row.categories.toLowerCase().includes(value.toLowerCase()) ||
      row.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase())) ||
      row.nextMeeting.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  
  

  const columns = [
    { field: 'logo', headerName: 'Logo', flex: 1, renderCell: (params) => params.value, editable: true },
    { field: 'brand', headerName: 'Brand', flex: 1, editable: true },
    { field: 'description', headerName: 'Description', flex: 1, editable: true },
    { field: 'members', headerName: 'Members',renderCell: (params) => <img src={memba} alt="Member Logo" style={{ height: '6rem', width: '18rem' }} />, flex: 1, editable: true },
    { field: 'categories', headerName: 'Categories', flex: 1, editable: true, cellClassName: (params) => params.rowIndex % 2 === 0 ? 'blueCell' : 'greenCell' },
    { field: 'tags', headerName: 'Tags', flex: 1, editable: true },
    { field: 'nextMeeting', headerName: 'Next Meeting', flex: 1, editable: true, cellClassName: 'redCell'},
    { field: 'addRow', headerName: '+', flex: 1, renderCell: () => <button onClick={addRow}>+</button> }
  ];

  return (
    
    <div className="container">
        <hr />
      <div className="buttonContainer">
        <Search className='searching' placeholder='search for...' allowClear onSearch={handleSearch} style={{ width: 300 }} />
        {/* <div>
          <Button className="buttonStyle" onClick={() => filterByTag('selectedTag')} icon={<IoFilter />} size="large">
            Tags
          </Button>
        </div> */}<div className="buttons">
        <div>
          <Button className="buttonStyle" onClick={handleSort} icon={<FaSortAlphaDown />} size="large">
            Sort
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" onClick={handleFilter} icon={<FaFilter />} size="large">
            Filter
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" onClick={handleFilter} icon={<CiVideoOn />} size="large" style={{ marginLeft: '30rem' }}>
            Meeting
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" onClick={handleFilter} icon={<CiImport />} size="large">
            Import/Export
          </Button>
        </div>
        </div>
      </div>
      
      <DataGrid className='horizdata'
        rows={filteredData.length > 0 ? filteredData : tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        
        pageSizeOptions={[5, 10]}
        checkboxSelection
        autoHeight
      />
    </div>
  );
};

export default MainContent;
