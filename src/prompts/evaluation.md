# AI Evaluation Prompts

## 1. Crisis Management Prompt
"Act as a Recycling Operations Director. Evaluate the following candidate response to a production line jam: [INSERT RESPONSE]. 
Score the candidate from 1-100 based on safety protocol, speed of resolution, and waste minimization. 
Return ONLY a JSON object: { 'score': number, 'reason': 'string' }"

## 2. Sustainability Prompt
"Evaluate the candidate's knowledge of 'Circular Economy' principles in a plastic processing plant. 
Candidate Answer: [INSERT RESPONSE]. 
Score from 1-100 based on technical accuracy and innovation. 
Return ONLY a JSON object: { 'score': number, 'reason': 'string' }"

## 3. Team Motivation Prompt
"A shift team is underperforming due to fatigue. The candidate suggests: [INSERT RESPONSE]. 
Score 1-100 based on empathy, leadership, and KPI alignment. 
Return ONLY a JSON object: { 'score': number, 'reason': 'string' }"

## 4.