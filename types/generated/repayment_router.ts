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

export class RepaymentRouterContract extends BaseContract {
    public tokenTransferProxy = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as RepaymentRouterContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.tokenTransferProxy.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public debtRegistry = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as RepaymentRouterContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.debtRegistry.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public unpause = {
        async sendTransactionAsync(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.unpause.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.unpause, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            txData: TxData = {},
        ): Promise<number> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.unpause.estimateGas, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.unpause.getData, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public paused = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as RepaymentRouterContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.paused.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public pause = {
        async sendTransactionAsync(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.pause.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.pause, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            txData: TxData = {},
        ): Promise<number> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.pause.estimateGas, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.pause.getData, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public owner = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as RepaymentRouterContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public transferOwnership = {
        async sendTransactionAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transferOwnership.estimateGasAsync.bind(
                    self,
                    newOwner,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transferOwnership, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            newOwner: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            newOwner: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.transferOwnership.getData, self.web3ContractInstance,
            )(
                newOwner,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public repay = {
        async sendTransactionAsync(
            agreementId: string,
            amount: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.repay.estimateGasAsync.bind(
                    self,
                    agreementId,
                    amount,
                    tokenAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.repay, self.web3ContractInstance,
            )(
                agreementId,
                amount,
                tokenAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            agreementId: string,
            amount: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.repay.estimateGas, self.web3ContractInstance,
            )(
                agreementId,
                amount,
                tokenAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            agreementId: string,
            amount: BigNumber,
            tokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as RepaymentRouterContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.repay.getData, self.web3ContractInstance,
            )(
                agreementId,
                amount,
                tokenAddress,
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
    static async deployed(web3: Web3, defaults: Partial<TxData>): Promise<RepaymentRouterContract> {
        const currentNetwork = web3.version.network;
        const { abi, networks } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);

        return new RepaymentRouterContract(web3ContractInstance, defaults);
    }
    static async at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<RepaymentRouterContract> {
        const { abi } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(address);

        return new RepaymentRouterContract(web3ContractInstance, defaults);
    }
    private static async getArtifactsData(web3: Web3):
        Promise<any>
    {
        try {
            const artifact = await fs.readFile("build/contracts/RepaymentRouter.json", "utf8");
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
