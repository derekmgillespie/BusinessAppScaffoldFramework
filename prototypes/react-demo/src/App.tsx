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
  const [progress, setProgress] = useState(45);
  const [chips, setChips] = useState(['React', 'TypeScript', 'Vite']);
  const [currentStepperStep, setCurrentStepperStep] = useState(2);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [ratingValue, setRatingValue] = useState(3.5);

  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Australia', value: 'au' },
  ];

  const experienceOptions = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' },
    { label: 'Expert', value: 'expert' },
  ];

  const tabItems = [
    { label: 'Overview', value: 'overview' },
    { label: 'Components', value: 'components' },
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
    { component: 'Card', category: 'Display', status: '✅' },
    { component: 'Table', category: 'Display', status: '✅' },
    { component: 'Tabs', category: 'Display', status: '✅' },
    { component: 'Accordion', category: 'Display', status: '✅' },
    { component: 'Avatar', category: 'Display', status: '✅' },
    { component: 'Chip', category: 'Display', status: '✅' },
    { component: 'Divider', category: 'Display', status: '✅' },
    { component: 'Popover', category: 'Display', status: '✅' },
    { component: 'Timeline', category: 'Display', status: '✅' },
    { component: 'Breadcrumb', category: 'Navigation', status: '✅' },
    { component: 'Navbar', category: 'Navigation', status: '✅' },
    { component: 'Modal', category: 'Navigation', status: '✅' },
    { component: 'Dropdown', category: 'Navigation', status: '✅' },
    { component: 'Pagination', category: 'Navigation', status: '✅' },
    { component: 'Stepper', category: 'Navigation', status: '✅' },
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
    { title: 'What components are available?', content: '24+ components including forms, navigation, display, and feedback elements, all with Material Design styling.' },
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
    { title: 'Components Added', description: '34+ components implemented across 4 categories', time: '2024-02-20', icon: '⚙️' },
    { title: 'Demo Enhanced', description: 'Interactive demo with all component showcases', time: '2024-03-10', icon: '✨' },
    { title: 'Production Ready', description: 'Framework ready for business applications', time: '2024-04-01', icon: '✅' },
  ];

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
          All components generated from core specs using the framework generator.
        </p>

        <Tabs items={tabItems} active={activeTab} onChange={setActiveTab} />
        
        <div style={{ marginTop: '2rem' }}>
          {activeTab === 'overview' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <Alert 
                  variant="success" 
                  title="Success!" 
                  message="All 14+ components have been successfully implemented."
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
              <Card elevation="md" style={{ marginBottom: '1.5rem' }}>
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
        </div>
      </div>

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
        <p>This demo showcases <strong>34 components</strong> from the Business Application Framework:</p>
        <ul>
          <li>✅ <strong>Forms (12):</strong> Button, TextInput, TextArea, Select, Checkbox, Radio, Toggle, DatePicker, FileUpload, SearchBar, Slider, Rating</li>
          <li>✅ <strong>Display (9):</strong> Card, Table, Tabs, Accordion, Avatar, Chip, Divider, Popover, Timeline</li>
          <li>✅ <strong>Navigation (6):</strong> Breadcrumb, Navbar, Modal, Dropdown, Pagination, Stepper</li>
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
