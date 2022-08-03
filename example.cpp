#include <eosio/eosio.hpp>

using namespace eosio;

class [[eosio::contract]] example : public contract {
    public:
    using contract::contract;

    // Checks the input param `message` and returns serialized std::string instance.
    [[eosio::action]]
    std::string returnvalue( const name message )
    {
        // the `set_action_return_value` intrinsic is invoked automatically
        if (message == "hello"_n) return "Validation has passed.";
        return "Input param `message` not equal to `hello`.";
    }

    using returnvalue_action = action_wrapper<"returnvalue"_n, &example::returnvalue>;
};
