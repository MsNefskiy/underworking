import { configure } from 'mobx';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    observableRequiresReaction: false,
    reactionRequiresObservable: true,
    safeDescriptors: true,
});
