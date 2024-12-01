import React from "react";
import { services } from "./Service";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ServiceDetail.module.css";

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { serviceName } = useParams();

  const service = services.find((s) => s.path === serviceName);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{service?.title}</h1>
      <div className={styles.services}>
        {service?.subServices.map((subService, index) => (
          <div key={index} className={styles.serviceCard}>
            <img
              src={subService.image} // Assuming each sub-service has an `image` property
              alt={subService.title}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2 className="font-bold ">{subService.name}</h2>
              <h3 className={styles.serviceTitle}>{subService.title}</h3>
              <p className={styles.description}>{subService.description}</p>
              <button
                className={styles.readMore}
                onClick={() => alert("Read more clicked!")}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => navigate(-1)} className={styles.button}>
        Back
      </button>
    </div>
  );
};

export default ServiceDetail;
