/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
// tslint:disable-next-line:no-unused-variable
import {TxData, TxDataPayable} from '../common';
import {promisify} from '@0xproject/utils';
import {classUtils} from '../common';
import {BigNumber} from 'bignumber.js';
import * as fs from "fs-extra";
import * as Web3 from 'web3';

import {BaseContract} from '../base_contract';

export class MigrationsContract extends BaseContract {
    public upgrade = {
        async sendTransactionAsync(
            newAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.upgrade.estimateGasAsync.bind(
                    self,
                    newAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.upgrade, self.web3ContractInstance,
            )(
                newAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            newAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.upgrade.estimateGas, self.web3ContractInstance,
            )(
                newAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            newAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.upgrade.getData, self.web3ContractInstance,
            )(
                newAddress,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public last_completed_migration = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as MigrationsContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.last_completed_migration.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public owner = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as MigrationsContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public setCompleted = {
        async sendTransactionAsync(
            completed: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.setCompleted.estimateGasAsync.bind(
                    self,
                    completed,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.setCompleted, self.web3ContractInstance,
            )(
                completed,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            completed: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.setCompleted.estimateGas, self.web3ContractInstance,
            )(
                completed,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            completed: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MigrationsContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.setCompleted.getData, self.web3ContractInstance,
            )(
                completed,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    async deploy(...args: any[]): Promise<any> {
        const wrapper = this;
        const rejected = false;

        return new Promise((resolve, reject) => {
            wrapper.web3ContractInstance.new(wrapper.defaults, (err: string, contract: Web3.ContractInstance) => {
                if (err) {
                    reject(err);
                } else if (contract.address) {
                    wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(contract.address);
                    wrapper.address = contract.address;
                    resolve();
                }
            })
        });
    }
    static async deployed(web3: Web3, defaults: Partial<TxData>): Promise<MigrationsContract> {
        const currentNetwork = web3.version.network;
        const { abi, networks } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);

        return new MigrationsContract(web3ContractInstance, defaults);
    }
    static async at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<MigrationsContract> {
        const { abi } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(address);

        return new MigrationsContract(web3ContractInstance, defaults);
    }
    private static async getArtifactsData(web3: Web3):
        Promise<any>
    {
        try {
            const artifact = await fs.readFile("build/contracts/Migrations.json", "utf8");
            const { abi, networks } = JSON.parse(artifact);
            return { abi, networks };
        } catch (e) {
            console.error("Artifacts malformed or nonexistent: " + e.toString());
        }
    }
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
