import { useState } from 'react';
import { Button } from '@framework/components/Button';
import { TextInput } from '@framework/components/TextInput';
import { TextArea } from '@framework/components/TextArea';
import { Select } from '@framework/components/Select';
import { Checkbox } from '@framework/components/Checkbox';
import { Radio } from '@framework/components/Radio';
import { Toggle } from '@framework/components/Toggle';
import { Card } from '@framework/components/Card';
import { Tabs } from '@framework/components/Tabs';
import { Table } from '@framework/components/Table';
import { Breadcrumb } from '@framework/components/Breadcrumb';
import { Navbar } from '@framework/components/Navbar';
import { Modal } from '@framework/components/Modal';
import { DatePicker } from '@framework/components/DatePicker';
import { Alert } from '@framework/components/Alert';
import { Spinner } from '@framework/components/Spinner';
import { Badge } from '@framework/components/Badge';
import { Tooltip } from '@framework/components/Tooltip';
import { Toast } from '@framework/components/Toast';
import { Dropdown } from '@framework/components/Dropdown';
import { Pagination } from '@framework/components/Pagination';
import { Accordion } from '@framework/components/Accordion';
import { Avatar } from '@framework/components/Avatar';
import { ProgressBar } from '@framework/components/ProgressBar';
import { Chip } from '@framework/components/Chip';
import { Stepper } from '@framework/components/Stepper';
import { FileUpload } from '@framework/components/FileUpload';
import { Divider } from '@framework/components/Divider';
import { Skeleton } from '@framework/components/Skeleton';
import { SearchBar } from '@framework/components/SearchBar';
import { Slider } from '@framework/components/Slider';
import { Rating } from '@framework/components/Rating';
import { Popover } from '@framework/components/Popover';
import { Timeline } from '@framework/components/Timeline';
import { FormField } from '@framework/components/FormField';
import { AutoComplete } from '@framework/components/AutoComplete';
import { MultiSelect } from '@framework/components/MultiSelect';
import { DataGrid } from '@framework/components/DataGrid';
import { TimePicker } from '@framework/components/TimePicker';
import { ColorPicker } from '@framework/components/ColorPicker';
import { CommandPalette, type CommandItem } from '@framework/components/CommandPalette';

function App() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [country, setCountry] = useState('');
  const [comments, setComments] = useState('');
  const [experience, setExperience] = useState('');
  const [startDate, setStartDate] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState<Array<{id: number; message: string; variant: 'success' | 'error' | 'warning' | 'info'}>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [progress] = useState(45);
  const [chips, setChips] = useState(['React', 'TypeScript', 'Vite']);
  const [currentStepperStep, setCurrentStepperStep] = useState(2);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [ratingValue, setRatingValue] = useState(3.5);
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [gridData, setGridData] = useState([
    { id: 1, name: 'Alice Johnson', department: 'Engineering', role: 'Senior Developer', status: 'Active' },
    { id: 2, name: 'Bob Smith', department: 'Marketing', role: 'Marketing Manager', status: 'Active' },
    { id: 3, name: 'Carol Williams', department: 'Engineering', role: 'DevOps Engineer', status: 'Active' },
    { id: 4, name: 'David Brown', department: 'Sales', role: 'Sales Representative', status: 'Inactive' },
    { id: 5, name: 'Emma Davis', department: 'HR', role: 'HR Manager', status: 'Active' },
    { id: 6, name: 'Frank Miller', department: 'Engineering', role: 'Junior Developer', status: 'Active' },
    { id: 7, name: 'Grace Wilson', department: 'Marketing', role: 'Content Writer', status: 'Active' },
    { id: 8, name: 'Henry Moore', department: 'Sales', role: 'Account Executive', status: 'Active' },
    { id: 9, name: 'Iris Taylor', department: 'Engineering', role: 'Tech Lead', status: 'Active' },
    { id: 10, name: 'Jack Anderson', department: 'Finance', role: 'Accountant', status: 'Inactive' },
  ]);

  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedColor, setSelectedColor] = useState('#1976d2');
  const [paletteOpen, setPaletteOpen] = useState(false);

  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Australia', value: 'au' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Brazil', value: 'br' },
  ];

  const skillsOptions = [
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Node.js', value: 'node' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C#', value: 'csharp' },
    { label: 'Go', value: 'go' },
  ];

  const colorSwatches = ['#1976d2', '#d32f2f', '#388e3c', '#fbc02d', '#8e24aa', '#455a64', '#00897b', '#ffa000'];

  const experienceOptions = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' },
    { label: 'Expert', value: 'expert' },
  ];

  const tabItems = [
    { label: 'Overview', value: 'overview' },
    { label: 'Components', value: 'components' },
    { label: 'Advanced', value: 'advanced' },
    { label: 'Data', value: 'data' },
  ];

  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Framework', href: '#' },
    { label: 'Demo' },
  ];

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Docs', href: '#' },
  ];

  const commandItems = [
    { id: 'new-project', title: 'New Project', subtitle: 'Create a new workspace', shortcut: 'Ctrl+N' },
    { id: 'open-advanced', title: 'Open Advanced Tab', subtitle: 'Jump to advanced components', shortcut: 'Ctrl+Alt+A' },
    { id: 'toggle-modal', title: 'Show About Modal', subtitle: 'Open framework info modal', shortcut: 'Ctrl+M' },
    { id: 'toggle-theme', title: 'Toggle Theme', subtitle: 'Hypothetical action placeholder', shortcut: 'Ctrl+T' },
  ];

  const tableData = [
    { component: 'Button', category: 'Form', status: '✅' },
    { component: 'TextInput', category: 'Form', status: '✅' },
    { component: 'TextArea', category: 'Form', status: '✅' },
    { component: 'Select', category: 'Form', status: '✅' },
    { component: 'Checkbox', category: 'Form', status: '✅' },
    { component: 'Radio', category: 'Form', status: '✅' },
    { component: 'Toggle', category: 'Form', status: '✅' },
    { component: 'DatePicker', category: 'Form', status: '✅' },
    { component: 'FileUpload', category: 'Form', status: '✅' },
    { component: 'SearchBar', category: 'Form', status: '✅' },
    { component: 'Slider', category: 'Form', status: '✅' },
    { component: 'Rating', category: 'Form', status: '✅' },
    { component: 'AutoComplete', category: 'Form', status: '✅' },
    { component: 'MultiSelect', category: 'Form', status: '✅' },
    { component: 'TimePicker', category: 'Form', status: '✅' },
    { component: 'ColorPicker', category: 'Form', status: '✅' },
    { component: 'Card', category: 'Display', status: '✅' },
    { component: 'Table', category: 'Display', status: '✅' },
    { component: 'Tabs', category: 'Display', status: '✅' },
    { component: 'Accordion', category: 'Display', status: '✅' },
    { component: 'Avatar', category: 'Display', status: '✅' },
    { component: 'Chip', category: 'Display', status: '✅' },
    { component: 'Divider', category: 'Display', status: '✅' },
    { component: 'Popover', category: 'Display', status: '✅' },
    { component: 'Timeline', category: 'Display', status: '✅' },
    { component: 'DataGrid', category: 'Display', status: '✅' },
    { component: 'Breadcrumb', category: 'Navigation', status: '✅' },
    { component: 'Navbar', category: 'Navigation', status: '✅' },
    { component: 'Modal', category: 'Navigation', status: '✅' },
    { component: 'Dropdown', category: 'Navigation', status: '✅' },
    { component: 'Pagination', category: 'Navigation', status: '✅' },
    { component: 'Stepper', category: 'Navigation', status: '✅' },
    { component: 'CommandPalette', category: 'Navigation', status: '✅' },
    { component: 'Alert', category: 'Feedback', status: '✅' },
    { component: 'Toast', category: 'Feedback', status: '✅' },
    { component: 'Spinner', category: 'Feedback', status: '✅' },
    { component: 'Badge', category: 'Feedback', status: '✅' },
    { component: 'Tooltip', category: 'Feedback', status: '✅' },
    { component: 'ProgressBar', category: 'Feedback', status: '✅' },
    { component: 'Skeleton', category: 'Feedback', status: '✅' },
  ];

  const tableColumns = [
    { key: 'component', label: 'Component', width: '40%' },
    { key: 'category', label: 'Category', width: '30%' },
    { key: 'status', label: 'Status', width: '30%' },
  ];

  const showToast = (message: string, variant: 'success' | 'error' | 'warning' | 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, variant }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const dropdownItems = [
    { label: 'Edit', value: 'edit', icon: '✏️' },
    { label: 'Duplicate', value: 'duplicate', icon: '📋' },
    { divider: true, label: '', value: 'divider-1' },
    { label: 'Delete', value: 'delete', icon: '🗑️' },
  ];

  const accordionItems = [
    { title: 'What is this framework?', content: 'A technology-stack-agnostic framework for building business applications from Figma mockups with reusable components.' },
    { title: 'How does it work?', content: 'Components are defined as JSON specifications, then code generators transform them into React, Vue, Angular, or other tech stack implementations.' },
    { title: 'What components are available?', content: '40+ components across forms, navigation, display, and feedback, all styled with Material Design tokens.' },
  ];

  const stepperSteps = [
    { label: 'Account', description: 'Create your account' },
    { label: 'Profile', description: 'Set up your profile' },
    { label: 'Preferences', description: 'Configure settings' },
    { label: 'Complete', description: 'Finish setup' },
  ];

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileNames = Array.from(files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
      showToast(`Uploaded ${files.length} file(s)`, 'success');
    }
  };

  const timelineItems = [
    { title: 'Project Created', description: 'Framework initialized with core components', time: '2024-01-15', icon: '🚀' },
    { title: 'Components Added', description: '41 components implemented across 4 categories', time: '2024-02-20', icon: '⚙️' },
    { title: 'Demo Enhanced', description: 'Interactive demo with all component showcases', time: '2024-03-10', icon: '✨' },
    { title: 'Production Ready', description: 'Framework ready for business applications', time: '2024-04-01', icon: '✅' },
  ];

  const handleCommandSelect = (cmd: CommandItem) => {
    switch (cmd.id) {
      case 'new-project':
        showToast('New project action triggered (demo)', 'success');
        break;
      case 'open-advanced':
        setActiveTab('advanced');
        showToast('Navigated to Advanced tab', 'info');
        break;
      case 'toggle-modal':
        setModalOpen(true);
        break;
      case 'toggle-theme':
        showToast('Theme toggle placeholder', 'info');
        break;
      default:
        showToast(`Selected ${cmd.title}`, 'info');
    }
    setPaletteOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Navbar 
        brand="Framework Demo" 
        items={navItems}
        actionsSlot={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button label="Success" variant="primary" size="sm" onClick={() => showToast('Operation completed successfully!', 'success')} />
            <Button label="Error" variant="destructive" size="sm" onClick={() => showToast('An error occurred!', 'error')} />
            <Button label="Warning" variant="secondary" size="sm" onClick={() => showToast('This is a warning message', 'warning')} />
            <Button label="Info" variant="outline" size="sm" onClick={() => showToast('Here is some information', 'info')} />
            <Button label="Open Modal" onClick={() => setModalOpen(true)} />
          </div>
        }
      />
      
      <div style={{ paddingTop: '80px', padding: '80px 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Breadcrumb items={breadcrumbItems} />
        
        <h1 style={{ margin: '1.5rem 0 0.5rem' }}>Framework Component Demo</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          41 components generated from core specs using the framework generator.
        </p>

        <Tabs items={tabItems} active={activeTab} onChange={setActiveTab} />
        
        <div style={{ marginTop: '2rem' }}>
          {activeTab === 'overview' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <Alert 
                  variant="success" 
                  title="Success!" 
                  message="All 41 components are implemented, including new TimePicker, ColorPicker, and CommandPalette!"
                />
                <Alert 
                  variant="info" 
                  message="This framework supports multiple tech stacks with the same component specifications."
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <span style={{ marginLeft: '1rem', color: '#666' }}>Loading indicators</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', background: 'white', borderRadius: '6px', flexWrap: 'wrap' }}>
                  <Badge label="New" variant="primary" />
                  <Badge label="5" variant="error" />
                  <Badge label="Beta" variant="warning" />
                  <Badge label="Active" variant="success" />
                  <Badge label="Info" variant="info" />
                  <Badge label="v2.0" variant="secondary" />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <Card 
                  elevation="md"
                  header="About Framework"
                  content="A technology-stack-agnostic framework for building business applications from Figma mockups."
                />
                <Card 
                  elevation="md"
                  variant="outlined"
                  header="Features"
                  content={
                    <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                      <li>Design system separation</li>
                      <li>Stack agnostic components</li>
                    <li>Code generation</li>
                    <li>Modular architecture</li>
                  </ul>
                }
              />
              <Card 
                elevation="md"
                header="Status"
                content={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    All components implemented
                    <Tooltip content="Hover for help text" position="top">
                      <Badge label="?" variant="info" size="sm" />
                    </Tooltip>
                  </div>
                }
                actions={
                  <Button label="View All" onClick={() => setActiveTab('components')} />
                }
              />
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <Card 
                elevation="md"
                header="User Profiles"
                content={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <Avatar initials="JD" size="sm" />
                    <Avatar initials="AS" size="md" />
                    <Avatar initials="MK" size="lg" shape="square" />
                    <Avatar initials="RB" size="xl" />
                  </div>
                }
              />

              <Card 
                elevation="md"
                header="Actions"
                content={
                  <div>
                    <p style={{ marginTop: 0, marginBottom: '1rem', color: '#666' }}>Select an action:</p>
                    <Dropdown 
                      trigger={<Button label="Actions ▼" variant="outline" />}
                      items={dropdownItems}
                      onSelect={(value) => showToast(`Selected: ${value}`, 'info')}
                    />
                  </div>
                }
              />

              <Card 
                elevation="md"
                header="Progress Tracking"
                content={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <ProgressBar value={progress} showLabel variant="primary" />
                    <ProgressBar value={75} variant="success" size="sm" />
                    <ProgressBar value={30} variant="warning" size="lg" />
                  </div>
                }
              />
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>FAQ</h3>
              <Accordion items={accordionItems} />
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <Pagination 
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
            </div>

            <Divider label="Additional Components" spacing="lg" />

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <Card 
                elevation="md"
                header="Tags & Chips"
                content={
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {chips.map((chip, idx) => (
                      <Chip 
                        key={idx}
                        label={chip} 
                        variant="primary" 
                        removable 
                        onRemove={() => setChips(chips.filter((_, i) => i !== idx))}
                      />
                    ))}
                    <Chip label="Material" variant="success" icon="✨" />
                    <Chip label="Demo" variant="warning" />
                  </div>
                }
              />

              <Card 
                elevation="md"
                header="Onboarding Stepper"
                content={
                  <div style={{ marginTop: '1rem' }}>
                    <Stepper steps={stepperSteps} currentStep={currentStepperStep} />
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', justifyContent: 'center' }}>
                      <Button 
                        label="Previous" 
                        variant="secondary" 
                        size="sm"
                        disabled={currentStepperStep === 1}
                        onClick={() => setCurrentStepperStep(Math.max(1, currentStepperStep - 1))}
                      />
                      <Button 
                        label="Next" 
                        size="sm"
                        disabled={currentStepperStep === stepperSteps.length}
                        onClick={() => setCurrentStepperStep(Math.min(stepperSteps.length, currentStepperStep + 1))}
                      />
                    </div>
                  </div>
                }
              />

              <Card 
                elevation="md"
                header="File Upload"
                content={
                  <div>
                    <FileUpload 
                      accept=".pdf,.doc,.docx"
                      multiple
                      maxSize={5242880}
                      onChange={handleFileUpload}
                    />
                    {uploadedFiles.length > 0 && (
                      <div style={{ marginTop: '1rem' }}>
                        <Divider spacing="sm" />
                        <p style={{ fontSize: '0.875rem', color: '#666', margin: '0.5rem 0' }}>
                          Uploaded: {uploadedFiles.join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                }
              />
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <Card 
                elevation="md"
                header="Search & Filter"
                content={
                  <div>
                    <SearchBar 
                      value={searchQuery}
                      placeholder="Search components..."
                      onChange={setSearchQuery}
                      onSearch={(q) => alert(`Searching for: ${q}`)}
                    />
                    {searchQuery && (
                      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                        Searching for: "{searchQuery}"
                      </p>
                    )}
                  </div>
                }
              />

              <Card 
                elevation="md"
                header="Volume Slider"
                content={
                  <div>
                    <Slider 
                      value={sliderValue}
                      min={0}
                      max={100}
                      label="Volume Level"
                      onChange={setSliderValue}
                    />
                    <Popover 
                      trigger={<Button label="What's this?" variant="secondary" size="sm" />}
                      content={
                        <div>
                          <p style={{ margin: 0, fontSize: '0.875rem' }}>
                            This slider adjusts the volume from 0 to 100.
                          </p>
                        </div>
                      }
                      position="top"
                    />
                  </div>
                }
              />

              <Card 
                elevation="md"
                header="Product Rating"
                content={
                  <div>
                    <Rating 
                      value={ratingValue}
                      max={5}
                      size="lg"
                      allowHalf
                      onChange={setRatingValue}
                    />
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                      {ratingValue} out of 5 stars
                    </p>
                  </div>
                }
              />
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Project Timeline</h3>
              <Card 
                elevation="md"
                content={
                  <Timeline items={timelineItems} />
                }
              />
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Loading States</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', background: 'white', borderRadius: '6px' }}>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="40%" />
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <Skeleton variant="circular" width="40px" height="40px" />
                  <Skeleton variant="rectangular" width="200px" height="40px" animation="wave" />
                </div>
              </div>
            </div>
            </>
          )}

          {activeTab === 'components' && (
            <>
              <div style={{ marginBottom: '1.5rem' }}>
                <Card elevation="md">
                  <div style={{ padding: '1.5rem' }}>
                    <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>Button Gallery</h2>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                      Comprehensive button variants, sizes, and states showcasing the component's flexibility.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      {/* Variants */}
                      <div>
                        <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1rem' }}>Variants</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Button label="Primary" variant="primary" onClick={() => showToast('Primary clicked', 'info')} />
                        <Button label="Secondary" variant="secondary" onClick={() => showToast('Secondary clicked', 'info')} />
                        <Button label="Destructive" variant="destructive" onClick={() => showToast('Destructive clicked', 'error')} />
                        <Button label="Outline" variant="outline" onClick={() => showToast('Outline clicked', 'info')} />
                        <Button label="Ghost" variant="ghost" onClick={() => showToast('Ghost clicked', 'info')} />
                      </div>
                    </div>

                    {/* Sizes */}
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1rem' }}>Sizes</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                        <Button label="Small" variant="primary" size="sm" onClick={() => showToast('Small button clicked', 'info')} />
                        <Button label="Medium" variant="primary" size="md" onClick={() => showToast('Medium button clicked', 'info')} />
                        <Button label="Large" variant="primary" size="lg" onClick={() => showToast('Large button clicked', 'info')} />
                      </div>
                    </div>

                    {/* With Icons */}
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1rem' }}>With Icons</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Button label="Download" variant="primary" icon="⬇️" onClick={() => showToast('Downloading...', 'success')} />
                        <Button label="Upload" variant="secondary" icon="⬆️" onClick={() => showToast('Uploading...', 'info')} />
                        <Button label="Delete" variant="destructive" icon="🗑️" onClick={() => showToast('Deleted!', 'error')} />
                        <Button label="Settings" variant="outline" icon="⚙️" onClick={() => showToast('Opening settings...', 'info')} />
                      </div>
                    </div>

                    {/* Disabled States */}
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1rem' }}>Disabled States</h3>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        <Button label="Disabled Primary" variant="primary" disabled />
                        <Button label="Disabled Secondary" variant="secondary" disabled />
                        <Button label="Disabled Destructive" variant="destructive" disabled />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <Card elevation="md">
                  <div style={{ padding: '1.5rem' }}>
                    <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>FormField Component Demo</h2>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                      FormField is a wrapper component that adds label, error state, and hint text to form inputs.
                      It handles accessibility attributes and validation styling automatically.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Vertical Layout */}
                    <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '6px' }}>
                      <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Vertical Layout</h3>
                      
                      <FormField
                        label="Full Name"
                        required
                        hint="Enter your first and last name"
                      >
                        <TextInput 
                          value={name}
                          placeholder="John Doe"
                          onChange={(e: any) => {
                            setName(e.target.value);
                            if (e.target.value.trim().length < 2) {
                              setNameError('Name must be at least 2 characters');
                            } else {
                              setNameError('');
                            }
                          }}
                        />
                      </FormField>

                      <FormField
                        label="Email Address"
                        required
                        error={emailError}
                        invalid={!!emailError}
                      >
                        <TextInput 
                          value={email}
                          placeholder="john@example.com"
                          type="email"
                          onChange={(e: any) => {
                            setEmail(e.target.value);
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (e.target.value && !emailRegex.test(e.target.value)) {
                              setEmailError('Please enter a valid email address');
                            } else {
                              setEmailError('');
                            }
                          }}
                        />
                      </FormField>

                      <FormField
                        label="Comments"
                        hint="Tell us what you think about this framework"
                      >
                        <TextArea 
                          value={comments}
                          placeholder="Your feedback here..."
                          rows={3}
                          onChange={(e: any) => setComments(e.target.value)}
                        />
                      </FormField>

                      <FormField
                        label="Country"
                        required
                      >
                        <Select 
                          value={country}
                          options={countryOptions}
                          placeholder="Select a country"
                          onChange={(e: any) => setCountry(e.target.value)}
                        />
                      </FormField>
                    </div>

                    {/* Horizontal Layout */}
                    <div style={{ padding: '1rem', background: '#f9f9f9', borderRadius: '6px' }}>
                      <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Horizontal Layout</h3>
                      
                      <FormField
                        label="Subscribe"
                        layout="horizontal"
                      >
                        <Checkbox 
                          checked={subscribe}
                          label="Subscribe to newsletter"
                          onChange={(e: any) => setSubscribe(e.target.checked)}
                        />
                      </FormField>

                      <FormField
                        label="Notifications"
                        layout="horizontal"
                        hint="Receive email notifications"
                      >
                        <Toggle 
                          checked={notifications}
                          label="Enable notifications"
                          onChange={(e: any) => setNotifications(e.target.checked)}
                        />
                      </FormField>

                      <FormField
                        label="Experience"
                        layout="horizontal"
                      >
                        <Radio 
                          name="experience"
                          value={experience}
                          options={experienceOptions}
                          onChange={(e: any) => setExperience(e.target.value)}
                        />
                      </FormField>

                      <FormField
                        label="Start Date"
                        layout="horizontal"
                        required
                      >
                        <DatePicker 
                          value={startDate}
                          onChange={(e: any) => setStartDate(e.target.value)}
                        />
                      </FormField>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                    <Button 
                      label="Submit" 
                      variant="primary"
                      onClick={() => {
                        if (!name || !email || !country) {
                          alert('Please fill in all required fields');
                        } else if (emailError) {
                          alert('Please fix the email error');
                        } else {
                          showToast('Form submitted successfully!', 'success');
                        }
                      }}
                    />
                    <Button 
                      label="Reset" 
                      variant="secondary"
                      onClick={() => {
                        setName('');
                        setEmail('');
                        setEmailError('');
                        setNameError('');
                        setCountry('');
                        setStartDate('');
                        setComments('');
                        setExperience('');
                        setSubscribe(false);
                        setNotifications(true);
                      }}
                    />
                  </div>

                  <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f0f0f0', borderRadius: '4px' }}>
                    <h3 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Form State:</h3>
                    <pre style={{ fontSize: '0.875rem', overflow: 'auto', margin: 0 }}>
                      {JSON.stringify({ 
                        name, 
                        email, 
                        country, 
                        startDate, 
                        comments, 
                        experience,
                        subscribe, 
                        notifications,
                        emailError,
                        nameError
                      }, null, 2)}
                    </pre>
                  </div>
                </div>
              </Card>
            </div>

              <Card elevation="md">
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>All Available Components</h2>
                  <Table columns={tableColumns} data={tableData} />
                </div>
              </Card>
            </>
          )}

          {activeTab === 'data' && (
            <Card elevation="md">
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Component Status Table</h2>
                <Table columns={tableColumns} data={tableData} />
              </div>
            </Card>
          )}

          {activeTab === 'advanced' && (
            <>
              <div style={{ marginBottom: '1.5rem' }}>
                <Card elevation="md">
                  <div style={{ padding: '1.5rem' }}>
                    <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>Advanced Form Components</h2>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                      New components for complex data entry and management scenarios.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1rem' }}>AutoComplete</h3>
                      <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Searchable dropdown with real-time filtering. Type to see suggestions.
                      </p>
                      <FormField
                        label="Select Country"
                        hint="Start typing to filter options"
                      >
                        <AutoComplete
                          value={autoCompleteValue}
                          options={countryOptions}
                          placeholder="Type country name..."
                          onChange={(value, option) => {
                            setAutoCompleteValue(value);
                            showToast(`Selected: ${option?.label}`, 'success');
                          }}
                        />
                      </FormField>
                      {autoCompleteValue && (
                        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                          Selected: {countryOptions.find(c => c.value === autoCompleteValue)?.label}
                        </p>
                      )}
                    </div>

                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1rem' }}>MultiSelect</h3>
                      <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Select multiple options with searchable chips. Try selecting skills.
                      </p>
                      <FormField
                        label="Technical Skills"
                        hint="Select all that apply"
                      >
                        <MultiSelect
                          value={selectedSkills}
                          options={skillsOptions}
                          placeholder="Choose your skills..."
                          maxSelections={5}
                          onChange={(values) => {
                            setSelectedSkills(values);
                            showToast(`${values.length} skill(s) selected`, 'info');
                          }}
                        />
                      </FormField>
                      {selectedSkills.length > 0 && (
                        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                          Selected {selectedSkills.length} of max 5 skills
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <Card elevation="md">
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>Time, Color, & Commands</h2>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    Control scheduling, branding colors, and quick navigation with the newest components.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '1rem' }}>TimePicker</h3>
                      <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Choose times in 15-minute increments. Uses dropdown options and supports manual entry.
                      </p>
                      <TimePicker 
                        value={selectedTime} 
                        step={15} 
                        onChange={(val) => setSelectedTime(val)}
                      />
                      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Badge label={selectedTime || 'Not set'} variant="info" />
                        <Button label="8:30" size="sm" variant="secondary" onClick={() => setSelectedTime('08:30')} />
                        <Button label="13:00" size="sm" variant="secondary" onClick={() => setSelectedTime('13:00')} />
                        <Button label="Reset" size="sm" variant="ghost" onClick={() => setSelectedTime('')} />
                      </div>
                    </div>

                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '1rem' }}>ColorPicker</h3>
                      <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Pick brand colors or pick from curated swatches. Active color is previewed live.
                      </p>
                      <ColorPicker 
                        value={selectedColor}
                        swatches={colorSwatches}
                        onChange={(val) => setSelectedColor(val)}
                      />
                    </div>

                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '0.75rem', fontSize: '1rem' }}>CommandPalette</h3>
                      <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        Launch global actions with keyboard-like navigation. Try opening the palette below.
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Button label="Open Palette" onClick={() => setPaletteOpen(true)} />
                        <Button label="Advanced Tab" variant="secondary" size="sm" onClick={() => setActiveTab('advanced')} />
                        <Button label="About Modal" variant="outline" size="sm" onClick={() => setModalOpen(true)} />
                      </div>
                      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {commandItems.map((cmd) => (
                          <Badge key={cmd.id} label={cmd.shortcut || cmd.title} variant="secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

            </div>

              <Card elevation="md">
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ marginTop: 0, marginBottom: '1rem' }}>DataGrid - Employee Management</h2>
                  <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                    Advanced table with sorting, filtering, pagination, row selection, and inline editing.
                    Try clicking column headers to sort, double-click cells to edit, or select rows.
                  </p>
                  <DataGrid
                    columns={[
                      { key: 'id', label: 'ID', width: '60px', sortable: true },
                      { key: 'name', label: 'Name', sortable: true, filterable: true, editable: true },
                      { key: 'department', label: 'Department', sortable: true, filterable: true },
                      { key: 'role', label: 'Role', sortable: true, editable: true },
                      { key: 'status', label: 'Status', sortable: true, filterable: true },
                    ]}
                    data={gridData}
                    sortable
                    filterable
                    selectable
                    editable
                    pageSize={5}
                    pagination
                    onSort={(column, direction) => {
                      showToast(`Sorted by ${column} (${direction})`, 'info');
                    }}
                    onSelectionChange={(rows) => {
                      showToast(`${rows.length} row(s) selected`, 'info');
                    }}
                    onEdit={(rowIndex, columnKey, newValue) => {
                      const updatedData = [...gridData];
                      updatedData[rowIndex] = { ...updatedData[rowIndex], [columnKey]: newValue };
                      setGridData(updatedData);
                      showToast(`Updated ${columnKey} to "${newValue}"`, 'success');
                    }}
                  />
                </div>
              </Card>
            </>
          )}
        </div>
      </div>

      <CommandPalette 
        open={paletteOpen} 
        commands={commandItems} 
        onClose={() => setPaletteOpen(false)} 
        onSelect={handleCommandSelect} 
      />

      <Modal 
        open={modalOpen}
        title="Welcome to Framework Demo"
        onClose={() => setModalOpen(false)}
        footer={
          <>
            <Button label="Close" variant="secondary" onClick={() => setModalOpen(false)} />
            <Button label="Got it!" onClick={() => setModalOpen(false)} />
          </>
        }
      >
        <p>This demo showcases <strong>41 components</strong> from the Business Application Framework:</p>
        <ul>
          <li>✅ <strong>Forms (17):</strong> Button, TextInput, TextArea, Select, Checkbox, Radio, Toggle, DatePicker, FileUpload, SearchBar, Slider, Rating, AutoComplete, MultiSelect, FormField, TimePicker, ColorPicker</li>
          <li>✅ <strong>Display (10):</strong> Card, Table, Tabs, Accordion, Avatar, Chip, Divider, Popover, Timeline, DataGrid</li>
          <li>✅ <strong>Navigation (7):</strong> Breadcrumb, Navbar, Modal, Dropdown, Pagination, Stepper, CommandPalette</li>
          <li>✅ <strong>Feedback (7):</strong> Alert, Toast, Spinner, Badge, Tooltip, ProgressBar, Skeleton</li>
        </ul>
        <p>All components are built from technology-agnostic specs and styled with Material Design tokens.</p>
      </Modal>

      <div style={{ 
        position: 'fixed', 
        top: '80px', 
        right: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '0.75rem',
        zIndex: 1000 
      }}>
        {toasts.map(toast => (
          <Toast 
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
