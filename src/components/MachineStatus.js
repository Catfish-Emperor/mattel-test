import React from 'react';
import {machineC,machineD} from '../arrays/machines';
import Machine2 from './Machine2';
import { Flex } from '@chakra-ui/react';

export default function MachineStatus() {
    const machineButtonsC = machineC.map((m) => (
        <Machine2 key={m.machine} name={m.machine} />
    ));
    const machineButtonsD = machineD.map((m) => (
        <Machine2 key={m.machine} name={m.machine} />
    ));

    return (
        <Flex>
        <Flex direction={'column'} paddingLeft={20} paddingTop={20} gap={2} >
        {machineButtonsC}
        </Flex>
        <Flex direction={'column'} paddingLeft={2} paddingTop={20} gap={2} >
        {machineButtonsD}
        </Flex>
        </Flex>
    )
}