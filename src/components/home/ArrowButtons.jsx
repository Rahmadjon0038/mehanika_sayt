import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { rootdata } from '../../utils/RootData'

// export const rootdata = [
//   { id: 1, name: 'Bir Kuch Kuchlar sistemasi Tengsiretuvchi kuch', path: '/Bir_KuchKuchlarsistemasiTengsiretuvchikuch' },
//   { id: 2, name: 'Ikki Axioma', path: '/AxiomsSection' },
//   { id: 3, name: 'Uch Uch Kuch Muozanati', path: '/ForcesIntersection' },
//   { id: 4, name: 'Projection And Problems', path: '/ProjectionAndProblems' },
//   { id: 5, name: 'Force Moment', path: '/ForceMoment' },
//   { id: 6, name: 'Moment Vector', path: '/MomentVector' },
//   { id: 7, name: 'Varignon Theorem', path: '/VarignonTheorem' },
//   { id: 8, name: 'Force Moment On Axis', path: '/ForceMomentOnAxis' },
//   { id: 9, name: 'Couple Moment', path: '/CoupleMoment' },
//   { id: 10, name: 'Connections And Reactions', path: '/ConnectionsAndReactions' }
// ];

export default function PaginationRounded() {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
    navigate(rootdata[value - 1]?.path || '/');
  };

  return (
    <Stack spacing={2} sx={{ padding: 2 }}>
      <ul>
        {rootdata.slice((page - 1) * 5, page * 5).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        count={Math.ceil(rootdata.length / 5)}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="large"
      />
    </Stack>
  );
}

NavigationButtons