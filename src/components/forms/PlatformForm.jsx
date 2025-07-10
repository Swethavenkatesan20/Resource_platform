// import React, { useState } from "react";
// import styles from './PlatformForm.module.css'
// import PlatformNameInput from "./PlatformNameInput";
// import PlatformTypeSelector from "./PlatformTypeSelector";


// const PlatformForm=()=>{

//     const [activeTab,setActiveTab]=useState('details')
//     const [type, setType] = useState('agent');


//     return(
//         <div className={styles.PlatformForm}>
//             {/* selecting tab platformdetails / permission */}
//             <div className={styles.tab}>
//                 <button className={`${styles.tabButton} ${activeTab==='details' ? styles.active : ''}`} 
//                 onClick={()=>setActiveTab('details')}>
//                     Platform Details
//                 </button>
//                 <button className={`${styles.tabButton} ${activeTab==='details' ? styles.active : ''}`} 
//                 onClick={()=>setActiveTab('permissions') }>
//                     Permissions
//                 </button>
//             </div>
//             {/* tab content */}
//             {activeTab==='details' && (
//                 <div className={styles.tabcontent}>
//                     <PlatformNameInput/>
//                     <PlatformTypeSelector value={type} onChange={setType} />
//                     {/* <AgentSelector />
//                     <div className={styles.flexRow}>
//                     <ResourceDropdown />
//                     <AdditionalSettings />
//                     </div>
//                     <AlternativeResourceTree /> */}
//                 </div>
//             )}
//             {activeTab === 'permissions' && (
//                 <div className={styles.tabContent}>
//                  <p>Permissions section (in progress)</p>
//                 </div>
//       )}

        
//         </div>
//     )
// }

// export default PlatformForm



import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';
import styles from './PlatformForm.module.css';
import PlatformNameInput from './PlatformForm/PlatformNameInput/PlatformNameInput';
import PlatformTypeSelector from './PlatformForm/PlatformTypeSelector/PlatformTypeSelector';
import AgentTypeSelector from './PlatformForm/AgentTypeSelector/AgentTypeSelector';
import ResourceDropdown from './PlatformForm/ResourceDropdown/ResourceDropdown';
import DatabaseObjectSelector from './PlatformForm/DatabaseObjectSelector/DatabaseObjectSelector';
import AlternativeResourceTree from './PlatformForm/AlternativeResourceTree/AlternativeResourceTree';

// import PlatformNameInput from './PlatformForm/PlatformNameInput/PlatformNameInput';
// import PlatformTypeSelector from './PlatformForm/PlatformTypeSelector/PlatformTypeSelector';
// // import AgentSelector from './AgentSelector';
// // import ResourceDropdown from './ResourceDropdown';
// // import AlternativeResourceTree from './AlternativeResourceTree';
// // import AdditionalSettings from './AdditionalSettings';
// import Button from '../common/Button/Button';
// //import AgentSelector from './AgentTypeSelector';
// import ResourceDropdown from './PlatformForm/ResourceDropdown/ResourceDropdown';
// //import AgentTypeSelector from './AgentTypeSelector';
// import DatabaseObjectSelector from './PlatformForm/DatabaseObjectSelector/DatabaseObjectSelector';
// import AlternativeResourceTree from './PlatformForm/AlternativeResourceTree/AlternativeResourceTree';

const PlatformForm = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [type, setType] = useState('agent');
  const [form] = Form.useForm();
  const [agentType, setAgentType] = useState(null);
  const [resource, setResource] = useState(null); // Add this line
  const [dbObject, setDbObject] = useState(null);
  const [alternativeResources, setAlternativeResources] = useState([]);



  const handleSubmit = (values) => {
    console.log('Form Submit:', values);
  };

  return (
    <div className={styles.PlatformForm}>
      {/* Tabs */}
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${activeTab === 'details' ? styles.active : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Platform Details
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'permissions' ? styles.active : ''}`}
          onClick={() => setActiveTab('permissions')}
        >
          Permissions
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'details' && (
        <div className={styles.tabContent}>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ paddingTop: '1rem' }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12}>
                <PlatformNameInput form={form} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: '1rem' }}>
              <Col xs={24} sm={24} md={12}>
                <PlatformTypeSelector value={type} onChange={setType} />
              </Col>
              <Col xs={24} sm={24} md={12}>
    <AgentTypeSelector value={agentType} onChange={setAgentType} />
  </Col>
            </Row>

            
<Row gutter={16} style={{ marginTop: '1rem' }}>
  <Col xs={24} sm={24} md={12}>
    <ResourceDropdown value={resource} onChange={setResource} />
  </Col>
  <Col xs={24} sm={24} md={12}>
    <DatabaseObjectSelector value={dbObject} onChange={setDbObject} />
  </Col>
</Row>

<Row style={{ marginTop: '1rem' }}>
  <Col xs={24}>
    <AlternativeResourceTree
      selected={alternativeResources}
      onChange={setAlternativeResources}
    />
  </Col>
</Row>



            {/* {type === 'agent' && (
  <Row gutter={16} style={{ marginTop: '1rem' }}>
    <Col xs={24} sm={24} md={12}>
      <ResourceDropdown value={resource} onChange={setResource} />
    </Col>
    <Col xs={24} sm={24} md={12}>
      <AgentTypeSelector value={agentType} onChange={setAgentType} />
    </Col>
  </Row>
)}


<Row gutter={16} style={{ marginTop: '1rem' }}>
  <Col xs={24} sm={24} md={12}>
    <AdditionalSettings />
  </Col>
</Row>



<Row style={{ marginTop: '1rem' }}>
  <Col xs={24}>
    <AlternativeResourceTree selected={alternativeResources} onChange={setAlternativeResources} />
  </Col>
</Row> */}

            {/* Next: show rest conditionally based on `type` */}
            {/* Example only:
              {type === 'agent' && <AgentSelector />}
            */}

            
          </Form>
        </div>
      )}

      {activeTab === 'permissions' && (
        <div className={styles.tabContent}>
          <p>Permissions section (in progress)</p>
        </div>
      )}
    </div>
  );
};

export default PlatformForm;
