import { useState, useEffect } from 'react';
import axios from 'axios';

export default function JournalList() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/journal', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setJournals(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJournals();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">My Journals</h1>
      <ul>
        {journals.map(journal => (
          <li key={journal._id}>
            <a href={`/journal/${journal._id}`} className="text-blue-500">{journal.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}