
import React, { useState } from 'react';
import { GalleryHorizontalEnd, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryItems = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard showing workspace utilization metrics and trends.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  },
  {
    id: 2,
    title: 'Building Management Console',
    description: 'Comprehensive building management interface for monitoring and controlling building systems.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: 3,
    title: 'User Management Portal',
    description: 'Administrative interface for managing user access, permissions, and profiles.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  },
  {
    id: 4,
    title: 'Spatial Mapping Visualization',
    description: '3D visualization of workspace layout with real-time occupancy data.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: 5,
    title: 'Mobile Companion App',
    description: 'Mobile interface for Éclat OS, allowing on-the-go access to key features.',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  },
  {
    id: 6,
    title: 'Executive Reporting Dashboard',
    description: 'High-level reporting dashboard designed for executive stakeholders.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  },
];

interface ModalProps {
  item: typeof galleryItems[0];
  onClose: () => void;
  isVisible: boolean;
}

const GalleryModal: React.FC<ModalProps> = ({ item, onClose, isVisible }) => {
  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={onClose}
    >
      <div 
        className={cn(
          "neo-blur max-w-4xl w-full mx-4 rounded-2xl overflow-hidden transition-all duration-500 transform",
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-auto object-cover aspect-video" 
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <p className="text-muted-foreground">{item.description}</p>
          
          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-card p-4 border border-border/50">
              <h3 className="text-lg font-medium mb-2">Key Features</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></span>
                  <span>Interactive data visualization with drill-down capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></span>
                  <span>Real-time data updates with configurable refresh intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-1.5"></span>
                  <span>Export capabilities for reports and presentations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setTimeout(() => setModalVisible(true), 50);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <GalleryHorizontalEnd className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-gradient-primary">Project Gallery</h1>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Explore visual previews of Éclat OS modules and features. Click on any item to view more details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <div 
            key={item.id} 
            className="glass rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/20 transition-all hover:shadow-lg animate-fadeInUp"
            style={{ animationDelay: `${0.1 * index}s` }}
            onClick={() => openModal(item)}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <GalleryModal 
          item={selectedItem} 
          onClose={closeModal} 
          isVisible={modalVisible} 
        />
      )}
    </div>
  );
};

export default Gallery;
