import { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDwon, FaChevronRight, FaPlus } from "react-icons/fa";

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

export const ChannelBar = () => (
  <div className="channel-bar shadow-lg">
    <ChannelBlock />
    <div className="channel-container">

    </div>
  </div>
)

const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
)