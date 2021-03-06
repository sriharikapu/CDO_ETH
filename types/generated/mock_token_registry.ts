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

export class MockTokenRegistryContract extends BaseContract {
    public getMockReturnValue = {
        async callAsync(
            functionName: string,
            argsSignature: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as MockTokenRegistryContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getMockReturnValue.call,
                self.web3ContractInstance,
            )(
                functionName,
                argsSignature,
            );
            return result;
        },
    };
    public getTokenAddressBySymbol = {
        async callAsync(
            symbol: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as MockTokenRegistryContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getTokenAddressBySymbol.call,
                self.web3ContractInstance,
            )(
                symbol,
            );
            return result;
        },
    };
    public getTokenAddressByIndex = {
        async callAsync(
            index: BigNumber,
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as MockTokenRegistryContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.getTokenAddressByIndex.call,
                self.web3ContractInstance,
            )(
                index,
            );
            return result;
        },
    };
    public mockReturnValue = {
        async sendTransactionAsync(
            functionName: string,
            argsSignature: string,
            returnValue: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.mockReturnValue.estimateGasAsync.bind(
                    self,
                    functionName,
                    argsSignature,
                    returnValue,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.mockReturnValue, self.web3ContractInstance,
            )(
                functionName,
                argsSignature,
                returnValue,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            functionName: string,
            argsSignature: string,
            returnValue: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.mockReturnValue.estimateGas, self.web3ContractInstance,
            )(
                functionName,
                argsSignature,
                returnValue,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            functionName: string,
            argsSignature: string,
            returnValue: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.mockReturnValue.getData, self.web3ContractInstance,
            )(
                functionName,
                argsSignature,
                returnValue,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public mockGetTokenAddressBySymbol = {
        async sendTransactionAsync(
            symbol: string,
            token: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.mockGetTokenAddressBySymbol.estimateGasAsync.bind(
                    self,
                    symbol,
                    token,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.mockGetTokenAddressBySymbol, self.web3ContractInstance,
            )(
                symbol,
                token,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            symbol: string,
            token: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.mockGetTokenAddressBySymbol.estimateGas, self.web3ContractInstance,
            )(
                symbol,
                token,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            symbol: string,
            token: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.mockGetTokenAddressBySymbol.getData, self.web3ContractInstance,
            )(
                symbol,
                token,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public reset = {
        async sendTransactionAsync(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.reset.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.reset, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.reset.estimateGas, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.reset.getData, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public mockGetTokenAddressByIndex = {
        async sendTransactionAsync(
            index: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.mockGetTokenAddressByIndex.estimateGasAsync.bind(
                    self,
                    index,
                    token,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.mockGetTokenAddressByIndex, self.web3ContractInstance,
            )(
                index,
                token,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            index: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.mockGetTokenAddressByIndex.estimateGas, self.web3ContractInstance,
            )(
                index,
                token,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            index: BigNumber,
            token: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as MockTokenRegistryContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.mockGetTokenAddressByIndex.getData, self.web3ContractInstance,
            )(
                index,
                token,
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
    static async deployed(web3: Web3, defaults: Partial<TxData>): Promise<MockTokenRegistryContract> {
        const currentNetwork = web3.version.network;
        const { abi, networks } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);

        return new MockTokenRegistryContract(web3ContractInstance, defaults);
    }
    static async at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<MockTokenRegistryContract> {
        const { abi } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(address);

        return new MockTokenRegistryContract(web3ContractInstance, defaults);
    }
    private static async getArtifactsData(web3: Web3):
        Promise<any>
    {
        try {
            const artifact = await fs.readFile("build/contracts/MockTokenRegistry.json", "utf8");
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
