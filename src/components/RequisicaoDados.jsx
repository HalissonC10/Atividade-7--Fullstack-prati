import React, { useState, useEffect } from 'react';
import '../styles/RequisicaoDados.css';
import { Link } from 'react-router-dom';

const RequisicaoDados = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar os posts:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="requisicao-dados">
      <h2>Lista de Posts</h2>
      {loading ? (
        <p className="loading">Carregando...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchPosts}>Recarregar</button>
      <Link to="/">
        <button className="saida">Sair</button>
      </Link>
    </div>
  );
};

export default RequisicaoDados;
