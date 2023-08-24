import React from 'react';
import {machineC,machineD,machineE} from '../arrays/machines';
import Machine2 from './Machine2';
import Machine3 from './Machine3';
import { Flex } from '@chakra-ui/react';
import { Navbar } from 'react-bootstrap';

export default function MachineStatus() {
    const machineButtonsC = machineC.map((m) => (
        <Machine3 key={m.machine} name={m.machine} />
    ));
    const machineButtonsD = machineD.map((m) => (
        <Machine3 key={m.machine} name={m.machine} />
    ));
    const machineButtonsE = machineE.map((m) => (
        <Machine3 key={m.machine} name={m.machine} />
    ));

    return (
        <>
        <div class="row mx-3">
            <div class="col-1">
                <div class="d-grid gap-2">
                    {machineButtonsC}
                </div>
            </div>
            <div class="col-1">
                <div class="d-grid gap-2">
                    {machineButtonsD}
                </div>
            </div>
            <div class="col-1">
                <div class="d-grid gap-2">
                    {machineButtonsE}
                </div>
            </div>
        </div>
    </>
    )
}