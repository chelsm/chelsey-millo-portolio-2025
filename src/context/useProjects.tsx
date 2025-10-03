import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';
import type { Project } from '../types/project';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://chelsey-millo-portolio-2025-default-rtdb.europe-west1.firebasedatabase.app/projects.json',
    )
      .then((res) => res.json())
      .then((data) => {
        const projects = Object.values(data) as Project[];
        setProjects(projects);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { projects, loading };
}
