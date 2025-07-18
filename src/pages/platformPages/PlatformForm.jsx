import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Form, Row, Col } from "antd";
import styles from "./PlatformForm.module.css";
import PlatformNameInput from "../../components/forms/PlatformForm/PlatformNameInput/PlatformNameInput";
import PlatformTypeSelector from "../../components/forms/PlatformForm/PlatformTypeSelector/PlatformTypeSelector";
import AgentTypeSelector from "../../components/forms/PlatformForm/AgentTypeSelector/AgentTypeSelector";
import ResourceDropdown from "../../components/forms/PlatformForm/ResourceDropdown/ResourceDropdown";
import DatabaseObjectSelector from "../../components/forms/PlatformForm/DatabaseObjectSelector/DatabaseObjectSelector";
import AlternativeResourceTree from "../../components/forms/PlatformForm/AlternativeResourceTree/AlternativeResourceTree";
import { postPlatformData } from "../../services/platformService";

//forwardRef allows parent to call internal methods
const PlatformForm = forwardRef((_, ref) => {
  const [form] = Form.useForm();

  const [activeTab, setActiveTab] = useState("details");
  const [type, setType] = useState("agent");
  const [agentType, setAgentType] = useState(null);
  const [resource, setResource] = useState(null);
  const [dbObject, setDbObject] = useState(null);
  const [alternativeResources, setAlternativeResources] = useState([]);

  // const handleSubmit = (values) => {
  //   console.log("Form Submit:", values);
  // };

  // save method
  const handleSave = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        ...values,
        agentType,
        resource,
        dbObject,
        alternativeResources,
      };

      await postPlatformData(payload); // values stored in payload and sent to server
      console.log(" Data saved:", payload);

      form.resetFields();
      setType("agent");
      setAgentType(null);
      setResource(null);
      setDbObject(null);
      setAlternativeResources([]);
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  // cancel method
  const handleCancel = () => {
    form.resetFields();
    setType("agent");
    setAgentType(null);
    setResource(null);
    setDbObject(null);
    setAlternativeResources([]);
  };

  //  expose these to parent
  useImperativeHandle(ref, () => ({
    handleSave,
    handleCancel,
  }));

  return (
    <div className={styles.PlatformForm}>
      {/* Tabs */}
      <div className={styles.tab}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "details" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Platform Details
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "permissions" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("permissions")}
        >
          Permissions
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <div className={styles.tabContent}>
          <Form
            form={form}
            layout="vertical"
            // onFinish={handleSubmit}
            style={{ paddingTop: "1rem" }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <PlatformNameInput form={form} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: "1rem" }}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <PlatformTypeSelector value={type} onChange={setType} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <AgentTypeSelector value={agentType} onChange={setAgentType} />
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: "1rem" }}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <ResourceDropdown value={resource} onChange={setResource} />
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <DatabaseObjectSelector
                  value={dbObject}
                  onChange={setDbObject}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "1rem" }}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <AlternativeResourceTree
                  selected={alternativeResources}
                  onChange={setAlternativeResources}
                />
              </Col>
            </Row>
          </Form>
        </div>
      )}

      {activeTab === "permissions" && (
        <div className={styles.tabContent}>
          <p>Permissions section (in progress)</p>
        </div>
      )}
    </div>
  );
});

export default PlatformForm;
