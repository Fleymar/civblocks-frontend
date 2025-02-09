"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const TimelineSection = () => {
  const [expandedPhases, setExpandedPhases] = useState<string[]>([]);

  const timelineData = [
    {
      id: 'phase1',
      title: 'Phase 1: Basic Agent Implementation',
      summary: 'Initial autonomous movement, basic interactions, and environment recognition',
      details: [
        {
          title: 'Environment Integration',
          description: 'Set up basic Minecraft environment integration and agent spawning mechanisms'
        },
        {
          title: 'Movement Systems',
          description: 'Implemented pathfinding algorithms and basic movement controls'
        },
        {
          title: 'Basic Interactions',
          description: 'Developed core interaction capabilities with blocks and items'
        },
        {
          title: 'Initial Testing',
          description: 'Conducted preliminary testing in controlled environments'
        }
      ]
    },
    {
      id: 'phase2',
      title: 'Phase 2: Advanced Cognition',
      summary: 'Memory systems, goal evaluation, and semantic understanding',
      details: [
        {
          title: 'Memory Architecture',
          description: 'Designed and implemented short-term and long-term memory systems'
        },
        {
          title: 'Goal System',
          description: 'Created hierarchical goal management and priority evaluation'
        },
        {
          title: 'Behavior Trees',
          description: 'Developed complex behavior trees for decision making'
        },
        {
          title: 'Knowledge Base',
          description: 'Implemented semantic knowledge representation system'
        }
      ]
    },
    {
      id: 'phase3',
      title: 'Current: Visual Analysis',
      summary: 'Implementing advanced visual recognition and semantic understanding',
      details: [
        {
          title: 'Visual Processing',
          description: 'Building neural networks for environmental analysis'
        },
        {
          title: 'Object Recognition',
          description: 'Implementing real-time object detection and classification'
        },
        {
          title: 'Spatial Understanding',
          description: 'Developing 3D space comprehension capabilities'
        },
        {
          title: 'Integration Testing',
          description: 'Testing visual systems with existing cognitive architecture'
        }
      ]
    }
  ];

  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => 
      prev.includes(phaseId)
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  return (
    <div className="space-y-6">
      {timelineData.map((phase) => (
        <div 
          key={phase.id}
          className="border-l-2 border-green-500 pl-4"
        >
          <button
            onClick={() => togglePhase(phase.id)}
            className="w-full text-left flex items-center justify-between group"
          >
            <div>
              <h3 className="text-lg font-semibold group-hover:text-green-300 transition-colors">
                {phase.title}
              </h3>
              <p className="text-green-200">{phase.summary}</p>
            </div>
            <div className="text-green-300">
              {expandedPhases.includes(phase.id) ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
          </button>
          
          <div
            className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
              expandedPhases.includes(phase.id) 
                ? 'max-h-[500px] opacity-100' 
                : 'max-h-0 opacity-0'
            }`}
          >
            {phase.details.map((detail, index) => (
              <div 
                key={index}
                className="pl-4 border-l border-green-600"
              >
                <h4 className="font-medium text-green-100">{detail.title}</h4>
                <p className="text-green-200 text-sm mt-1">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineSection;