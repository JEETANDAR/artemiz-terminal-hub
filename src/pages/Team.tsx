import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { TerminalBox } from '@/components/TerminalBox';
import { MatrixBackground } from '@/components/MatrixBackground';
import { Button } from '@/components/ui/button';
import jeetandarAvatar from '@/assets/avatars/jeetandar.jpg';
import tarun from '@/assets/avatars/tarun.jpg';
import arden from '@/assets/avatars/arden.jpg';
import gree from '@/assets/avatars/LINCY-1.jpg.webp';
import praka from '@/assets/avatars/praka.png';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  year?: string;
  department: string;
  bio: string;
  skills?: string[];
  expertise?: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  avatar: string;
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Mock team data - replace with actual team information
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Jeetandar N Silwani',
      role: 'Co-Founder | Coding Club Head',
      year: 'Final Year',
      department: 'Computer Science',
      bio: 'Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. Led multiple successful hackathon teams and contributed to open-source projects.',
      skills: ['React','MongoDB','Express JS', 'Node.js', 'Python', 'AWS', 'Docker','PowerBI','C','C++','Java'],
      github: 'https://github.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
      email: 'alex@artemiz.club',
      avatar: jeetandarAvatar
    },
    {
      id: '2',
      name: 'Arden Diago',
      role: 'Co-Founder',
      year: 'Passout',
      department: 'Computer Science',
      bio: 'Machine learning enthusiast and data science expert. Specialized in AI/ML projects and passionate about using technology to solve real-world problems.',
         skills: ['React','MongoDB','Express JS', 'Node.js', 'Python', 'AWS', 'Docker','PowerBI','C','C++','Java'],
      github: 'https://github.com/sarahjohnson',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah@artemiz.club',
      avatar: arden
    },
    {
      id: '3',
      name: 'Tarun Kumar',
      role: 'Co-Founder',
      year: 'Passout',
      department: 'Computer Science',
      bio: 'Backend architect with strong expertise in system design and database optimization. Experienced in building scalable applications and microservices.',
      skills: ['Java', 'Spring', 'PostgreSQL', 'Kubernetes', 'Redis'],
      github: 'https://github.com/rajpatel',
      linkedin: 'https://linkedin.com/in/rajpatel',
      email: 'raj@artemiz.club',
      avatar: tarun
    },
  
  ];

  // Faculty members data
  const facultyMembers: TeamMember[] = [
    {
      id: 'f1',
      name: 'Mr. Prakash V',
      role: 'HOD',
      department: 'Computer Science Department',
      bio: '',
      expertise: ['Machine Learning', 'Software Engineering', 'Algorithms', 'AI Research'],
      email: 'priya.sharma@university.edu',
      avatar: praka
    },
    {
      id: 'f2',
      name: 'Ms. Lincy Joseph',
      role: 'Asst. Professor',
      department: 'Computer Science Department',
      bio: '',
      expertise: ['Web Development', 'Database Systems', 'System Architecture', 'DevOps'],
      email: 'arjun.kumar@university.edu',
      avatar: gree}
    
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <MatrixBackground />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary glow-text mb-6">
              Our Team
            </h1>
            <div className="max-w-4xl mx-auto">
              <TerminalBox title="team_roster.sh">
                <p className="text-terminal-green font-mono">
                  $ cat team_members.json | grep -E "(name|role)" | head -20
                </p>
                <p className="text-muted-foreground font-mono mt-2">
                  Meet the passionate developers leading ARTEMIZ forward
                </p>
              </TerminalBox>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground font-mono">
              $ ls student_leaders/
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TerminalBox className="h-full cursor-pointer group hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary/30 overflow-hidden group-hover:border-primary transition-colors">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-primary mb-2 font-mono group-hover:text-terminal-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-terminal-yellow font-mono text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground font-mono text-xs mb-4">
                      {member.year} • {member.department}
                    </p>

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.skills?.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {(member.skills?.length || 0) > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono rounded">
                          +{(member.skills?.length || 0) - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button
                        variant="terminal"
                        size="sm"
                        className="w-full"
                        onClick={() => setSelectedMember(member)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      
                      <div className="flex justify-center space-x-2">
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TerminalBox>
              </motion.div>
            ))}
          </div>
          
          {/* Faculty Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Faculty Support
            </h2>
            <p className="text-lg text-muted-foreground font-mono">
              $ ls faculty_advisors/
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TerminalBox className="h-full cursor-pointer group hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    {/* Avatar */}
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary/30 overflow-hidden group-hover:border-primary transition-colors">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-primary mb-2 font-mono group-hover:text-terminal-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-terminal-yellow font-mono text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground font-mono text-xs mb-4">
                      {member.department}
                    </p>

                    {/* Expertise Preview */}
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.expertise.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono rounded">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button
                        variant="terminal"
                        size="sm"
                        className="w-full"
                        onClick={() => setSelectedMember(member)}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      
                      <div className="flex justify-center space-x-2">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TerminalBox>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="bg-card/95 backdrop-blur-sm border-primary/30 w-[90vw] max-w-lg mx-auto max-h-[90vh] overflow-hidden p-0 rounded-lg">
          {selectedMember && (
            <div className="flex flex-col max-h-[90vh]">
              {/* Fixed Header */}
              <div className="flex-shrink-0 bg-card border-b border-primary/20 p-4">
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-16 h-16 rounded-full border-2 border-primary/50"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/10"></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-primary font-mono mb-1">
                      {selectedMember.name}
                    </h2>
                    <p className="text-terminal-yellow font-mono text-sm mb-1">
                      {selectedMember.role}
                    </p>
                    {selectedMember.year && selectedMember.department && (
                      <p className="text-primary/80 font-mono text-xs">
                        {selectedMember.year} • {selectedMember.department}
                      </p>
                    )}
                    {!selectedMember.year && selectedMember.department && (
                      <p className="text-primary/80 font-mono text-xs">
                        {selectedMember.department}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Bio Section */}
                <div className="space-y-3">
                  <p className="text-terminal-green font-mono text-sm">
                    $ cat bio.txt
                  </p>
                  <div className="bg-background/50 p-4 rounded border border-primary/20">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>

                {/* Skills Section */}
                {(selectedMember.skills || selectedMember.expertise) && (
                  <div className="space-y-3">
                    <p className="text-terminal-green font-mono text-sm">
                      $ ls {selectedMember.skills ? 'skills' : 'expertise'}/
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(selectedMember.skills || selectedMember.expertise || []).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-primary/20 text-primary text-sm font-mono rounded border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Links Section */}
                <div className="space-y-3">
                  <p className="text-terminal-green font-mono text-sm">
                    $ ls social_links/
                  </p>
                  <div className="flex flex-col gap-3">
                    {selectedMember.github && (
                      <a
                        href={selectedMember.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-4 py-3 bg-terminal-cyan/20 text-terminal-cyan rounded border border-terminal-cyan/30 hover:bg-terminal-cyan/30 transition-colors font-mono text-sm"
                      >
                        <Github className="w-5 h-5" />
                        <span>GITHUB</span>
                      </a>
                    )}
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-4 py-3 bg-terminal-cyan/20 text-terminal-cyan rounded border border-terminal-cyan/30 hover:bg-terminal-cyan/30 transition-colors font-mono text-sm"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LINKEDIN</span>
                      </a>
                    )}
                    {selectedMember.email && (
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center space-x-3 px-4 py-3 bg-terminal-cyan/20 text-terminal-cyan rounded border border-terminal-cyan/30 hover:bg-terminal-cyan/30 transition-colors font-mono text-sm"
                      >
                        <Mail className="w-5 h-5" />
                        <span>EMAIL</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Team;
