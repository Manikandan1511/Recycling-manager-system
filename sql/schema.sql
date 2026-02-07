-- Database Setup
CREATE DATABASE IF NOT EXISTS recycling_db;
USE recycling_db;

-- 1. Candidates Table
CREATE TABLE IF NOT EXISTS candidates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    years_experience INT NOT NULL,
    skills TEXT, 
    bio TEXT
);

-- 2. Evaluations Table

CREATE TABLE IF NOT EXISTS evaluations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    candidate_id INT,
    crisis_score INT DEFAULT 0,
    sustainability_score INT DEFAULT 0,
    motivation_score INT DEFAULT 0,

    total_score INT GENERATED ALWAYS AS (crisis_score + sustainability_score + motivation_score) STORED,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

-- 3. Rankings View
CREATE VIEW IF NOT EXISTS leaderboard AS
SELECT 
    c.full_name,
    e.total_score,
    e.crisis_score,
    e.sustainability_score,
    e.motivation_score
FROM candidates c
JOIN evaluations e ON c.id = e.candidate_id
ORDER BY e.total_score DESC;