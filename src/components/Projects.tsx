import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import data from '../data.json';
import { Tag } from './Tag';

const IMG_PATH_PRE = 'https://raw.githubusercontent.com/thinkty/portfolio/master/images/';
const STAT = {
  default: 0,
  featured: 1,
  wip: 2,
  cancelled: 3,
};

type ProjectType = {
  name: string;
  desc: string;
  stat: number;
  repo: string;
  post?: string;
  demo?: string;
  img?: string[];
};

export function Projects() {
  return (
    <div className="projects">
      <Tag id="featured" name="Featured Projects" />
      <div className="featured">
        {
          data.filter((item) => (item.stat == STAT.featured)).map((item) => (
            <Project
              key={item.repo}
              {...item}
            />
          ))
        }
      </div>
    </div>
  );
}

function Project({
  name,
  desc,
  repo,
  post,
  demo,
  img
} : ProjectType) {
  return (
    <div className="project">
      <div className="container-1">
        <div className="name">
          { name }
        </div>
        <div className="desc">
          { desc }
        </div>
        <div className="links">
          <a href={repo} target="_blank">
            CODE
          </a>
          {
            post && post.length !== 0 &&
            <a href={post} target="_blank">
              POST
            </a>
          }
          {
            demo && demo.length !== 0 &&
            <a href={demo} target="_blank">
              DEMO
            </a>
          }
        </div>
      </div>
      {
        img && img.length !== 0 &&
        <div className="container-2">
          <Carousel
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            stopOnHover
          >
            {
              img.map((url) => (
                <div key={url}>
                  <img src={IMG_PATH_PRE + url} />
                </div>
              ))
            }
          </Carousel>
        </div>
      }
    </div>
  );
}
