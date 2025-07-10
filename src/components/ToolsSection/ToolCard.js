import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import GitHubButton from "./GitHubButton";

export default function ToolCard({ icon, title, description, docLink, githubRepo, gridAreaClass }) {
    const isExternal = docLink?.startsWith("http");

    return (
        <article className={clsx(styles.tool, gridAreaClass)}>
            <div className={styles.tool__img}></div>
            <FontAwesomeIcon icon={icon} className={styles.tool__icon} />
            <h3 className={styles.tool__title}>{title}</h3>
            <p className={styles.tool__description}>{description}</p>
            <div className={styles.tool__btnContainer}>
                {docLink && (
                    <a
                        className={clsx("btn", "btn-tertiary", styles.btn)}
                        href={docLink}
                        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                        {title}
                        <FontAwesomeIcon icon={faArrowRight} className={styles.btn__icon} />
                    </a>
                )}
                {githubRepo && (
                    <>
                        <GitHubButton repo={githubRepo} />
                    </>
                )}
            </div>
        </article>
    );
}
