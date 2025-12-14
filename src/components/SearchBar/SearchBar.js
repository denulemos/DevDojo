import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './SearchBar.module.css';
import { motion } from 'framer-motion';

export default function SearchBar({ docs }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDocs = docs.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div 
            className={styles.searchContainer} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
        >
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
            <ul className={styles.results}>
                {filteredDocs.map(doc => (
                    <motion.li key={doc.id} whileHover={{ scale: 1.02 }}>
                        <Link to={doc.path}>{doc.title}</Link>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}