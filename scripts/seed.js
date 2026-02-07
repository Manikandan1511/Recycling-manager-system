import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

const generateData = () => {
  const candidates = [];
  for (let i = 1; i <= 40; i++) {
    candidates.push({
      id: i,
      name: faker.person.fullName(),
      experience: faker.number.int({ min: 2, max: 15 }),
      skills: faker.helpers.arrayElements(['Lean Six Sigma', 'Circular Economy', 'SCADA', 'Waste Management', 'ISO 14001'], 3),
      scores: {
        crisis: faker.number.int({ min: 40, max: 100 }),
        sustainability: faker.number.int({ min: 40, max: 100 }),
        motivation: faker.number.int({ min: 40, max: 100 }),
      },
      bio: faker.person.bio()
    });
  }

  const dir = './src/data';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, 'mockData.json'), JSON.stringify(candidates, null, 2));
  console.log(" 40 Candidates generated in src/data/mockData.json");
};

generateData();