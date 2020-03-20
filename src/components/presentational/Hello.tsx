// import * as React from "react";
import React from 'react';

export interface HelloProps { text: string; addText: string; }

export const Hello = ({text: text = 'На карте:', addText}:HelloProps) => <span>{text}{addText}</span>;