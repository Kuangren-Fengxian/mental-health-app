import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function JournalDetail() {
  const [journal, setJournal] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchJournal = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/journal/${id}`, {
            headers: { 'x-auth-token': localStorage.getItem('token') },
          });
          setJournal(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchJournal();
    }
  }, [id]);

  if (!journal) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{journal.title}</h1>
      <p>{journal.content}</p>
    </div>
  );
}