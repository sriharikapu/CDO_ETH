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

export class DebtKernelContract extends BaseContract {
    public cancelDebtOrder = {
        async sendTransactionAsync(
            orderAddresses: string[],
            orderValues: BigNumber[],
            orderBytes32: string[],
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.cancelDebtOrder.estimateGasAsync.bind(
                    self,
                    orderAddresses,
                    orderValues,
                    orderBytes32,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.cancelDebtOrder, self.web3ContractInstance,
            )(
                orderAddresses,
                orderValues,
                orderBytes32,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            orderAddresses: string[],
            orderValues: BigNumber[],
            orderBytes32: string[],
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.cancelDebtOrder.estimateGas, self.web3ContractInstance,
            )(
                orderAddresses,
                orderValues,
                orderBytes32,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            orderAddresses: string[],
            orderValues: BigNumber[],
            orderBytes32: string[],
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.cancelDebtOrder.getData, self.web3ContractInstance,
            )(
                orderAddresses,
                orderValues,
                orderBytes32,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public unpause = {
        async sendTransactionAsync(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
    public debtOrderCancelled = {
        async callAsync(
            index_0: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.debtOrderCancelled.call,
                self.web3ContractInstance,
            )(
                index_0,
            );
            return result;
        },
    };
    public paused = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
    public issuanceCancelled = {
        async callAsync(
            index_0: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<boolean
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<boolean
    >(
                self.web3ContractInstance.issuanceCancelled.call,
                self.web3ContractInstance,
            )(
                index_0,
            );
            return result;
        },
    };
    public owner = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.owner.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public TOKEN_TRANSFER_PROXY = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.TOKEN_TRANSFER_PROXY.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public setDebtToken = {
        async sendTransactionAsync(
            debtTokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.setDebtToken.estimateGasAsync.bind(
                    self,
                    debtTokenAddress,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.setDebtToken, self.web3ContractInstance,
            )(
                debtTokenAddress,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            debtTokenAddress: string,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.setDebtToken.estimateGas, self.web3ContractInstance,
            )(
                debtTokenAddress,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            debtTokenAddress: string,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.setDebtToken.getData, self.web3ContractInstance,
            )(
                debtTokenAddress,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public cancelIssuance = {
        async sendTransactionAsync(
            version: string,
            debtor: string,
            termsContract: string,
            termsContractParameters: string,
            underwriter: string,
            underwriterRiskRating: BigNumber,
            salt: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.cancelIssuance.estimateGasAsync.bind(
                    self,
                    version,
                    debtor,
                    termsContract,
                    termsContractParameters,
                    underwriter,
                    underwriterRiskRating,
                    salt,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.cancelIssuance, self.web3ContractInstance,
            )(
                version,
                debtor,
                termsContract,
                termsContractParameters,
                underwriter,
                underwriterRiskRating,
                salt,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            version: string,
            debtor: string,
            termsContract: string,
            termsContractParameters: string,
            underwriter: string,
            underwriterRiskRating: BigNumber,
            salt: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.cancelIssuance.estimateGas, self.web3ContractInstance,
            )(
                version,
                debtor,
                termsContract,
                termsContractParameters,
                underwriter,
                underwriterRiskRating,
                salt,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            version: string,
            debtor: string,
            termsContract: string,
            termsContractParameters: string,
            underwriter: string,
            underwriterRiskRating: BigNumber,
            salt: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.cancelIssuance.getData, self.web3ContractInstance,
            )(
                version,
                debtor,
                termsContract,
                termsContractParameters,
                underwriter,
                underwriterRiskRating,
                salt,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public NULL_ISSUANCE_HASH = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.NULL_ISSUANCE_HASH.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public fillDebtOrder = {
        async sendTransactionAsync(
            creditor: string,
            orderAddresses: string[],
            orderValues: BigNumber[],
            orderBytes32: string[],
            signaturesV: Array<number|BigNumber>,
            signaturesR: string[],
            signaturesS: string[],
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.fillDebtOrder.estimateGasAsync.bind(
                    self,
                    creditor,
                    orderAddresses,
                    orderValues,
                    orderBytes32,
                    signaturesV,
                    signaturesR,
                    signaturesS,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.fillDebtOrder, self.web3ContractInstance,
            )(
                creditor,
                orderAddresses,
                orderValues,
                orderBytes32,
                signaturesV,
                signaturesR,
                signaturesS,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            creditor: string,
            orderAddresses: string[],
            orderValues: BigNumber[],
            orderBytes32: string[],
            signaturesV: Array<number|BigNumber>,
            signaturesR: string[],
            signaturesS: string[],
            txData: TxData = {},
        ): Promise<number> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.fillDebtOrder.estimateGas, self.web3ContractInstance,
            )(
                creditor,
                orderAddresses,
                orderValues,
                orderBytes32,
                signaturesV,
                signaturesR,
                signaturesS,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            creditor: string,
            orderAddresses: string[],
            orderValues: BigNumber[],
            orderBytes32: string[],
            signaturesV: Array<number|BigNumber>,
            signaturesR: string[],
            signaturesS: string[],
            txData: TxData = {},
        ): Promise<string> {
            const self = this as DebtKernelContract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.fillDebtOrder.getData, self.web3ContractInstance,
            )(
                creditor,
                orderAddresses,
                orderValues,
                orderBytes32,
                signaturesV,
                signaturesR,
                signaturesS,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public EXTERNAL_QUERY_GAS_LIMIT = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.EXTERNAL_QUERY_GAS_LIMIT.call,
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
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
            const self = this as DebtKernelContract;
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
    public debtToken = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as DebtKernelContract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.debtToken.call,
                self.web3ContractInstance,
            )(
            );
            return result;
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
    static async deployed(web3: Web3, defaults: Partial<TxData>): Promise<DebtKernelContract> {
        const currentNetwork = web3.version.network;
        const { abi, networks } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);

        return new DebtKernelContract(web3ContractInstance, defaults);
    }
    static async at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<DebtKernelContract> {
        const { abi } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(address);

        return new DebtKernelContract(web3ContractInstance, defaults);
    }
    private static async getArtifactsData(web3: Web3):
        Promise<any>
    {
        try {
            const artifact = await fs.readFile("build/contracts/DebtKernel.json", "utf8");
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
