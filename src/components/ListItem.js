import React from "react";
import Star from "./StarIcon";
import Fork from "./ForkIcon";

function InfoComponent({ item }) {
  return (
    <div className="List-item_info">
      <span lang={item.language}></span>
      <span>{item.language}</span>
      {item.stargazers_count && (
        <>
          <Star />
          <span>{item.stargazers_count}</span>
        </>
      )}
      {!Number.isNaN(item.forks_count) && item.forks_count > 0 && (
        <>
          <Fork />
          <span>{item.forks_count}</span>
        </>
      )}
    </div>
  );
}

export function ListItem(props) {
  const { full_name, description, html_url } = props.item;
  return (
    <div className="List-item">
      <div>
        <a href={html_url} className="Repo-link ">
          {full_name}
        </a>
      </div>
      <div>{description}</div>
      <InfoComponent item={props.item} />
    </div>
  );
}
