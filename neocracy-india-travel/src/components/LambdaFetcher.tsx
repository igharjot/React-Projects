import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LambdaFetcher: React.FC = () => {
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios.get<string>('https://ochz5lponb.execute-api.ap-south-1.amazonaws.com/hello')
      .then(res => setResponse(res.data))
      .catch(err => {
        setError('API call failed');
        console.error(err);
      });
  }, []);
  return (
    <div>
      <p className="text-lg text-gray-700">{response}</p>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default LambdaFetcher;
